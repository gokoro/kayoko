import type { VoiceConnection } from 'eris'

import * as fs from 'fs/promises'

import type { RegisterModule } from '../types.js'

import { createVoice, saveVoiceToDisk } from '../../libs/polly.js'
import { getArg } from '../utils.js'

const PATH = './output'

async function watchDirectory(path: string) {
  const watcher = fs.watch(path)

  for await (const event of watcher) {
    const filename = event.filename

    if (filename?.includes('converted')) {
      return filename
    }
  }
}

export const voices: RegisterModule = (bot) => {
  let connection: VoiceConnection | undefined

  process.on('uncaughtException', (err) => {
    bot.createMessage('1142773087872491530', err.message)
  })

  bot.on('messageCreate', async (msg) => {
    if (msg.content.startsWith('!join')) {
      const args = getArg(msg.content)
      const id = args[0]

      connection = await bot.joinVoiceChannel(id)
    }
  })

  bot.on('messageCreate', async (msg) => {
    if (msg.content.startsWith('!say')) {
      if (connection?.playing) {
        await bot.createMessage(msg.channel.id, '코하루가 말하고 이짜나!')
        return
      }

      const message = msg.content.replace('!say', '').trim()
      const hash = Date.now()
      const file = `${PATH}/${hash}.mp3`

      await saveVoiceToDisk(
        () =>
          createVoice({
            Text: message,
          }),
        file
      )

      const converted = await watchDirectory(PATH)
      const convertedFile = `${PATH}/${converted}`

      connection?.play(convertedFile || file)
    }
  })

  bot.on('messageCreate', async (msg) => {
    if (msg.content.startsWith('!leave')) {
      connection?.disconnect()
    }
  })
}
