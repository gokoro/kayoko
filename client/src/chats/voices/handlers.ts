import type { VoiceConnection } from 'eris'

import { Constants } from 'eris'
import * as fs from 'fs/promises'

import type { InteractionHandler } from '../types.js'

import { config } from '../../configs/index.js'
import { getClient } from '../../libs/eris.js'
import { createVoice, saveVoiceToDisk } from '../../libs/polly.js'

let connection: VoiceConnection | undefined

async function watchDirectory(path: string) {
  const watcher = fs.watch(path)

  for await (const event of watcher) {
    const filename = event.filename

    if (filename?.includes('converted')) {
      return filename
    }
  }
}

export const SayHandler: InteractionHandler = async (interaction) => {
  if (connection?.playing) {
    await interaction.createMessage('코하루가 말하고 이짜나!')
    return
  }

  if (
    interaction.data.options?.[0].type !==
    Constants.ApplicationCommandOptionTypes.STRING
  ) {
    return
  }

  const message = interaction.data.options?.[0].value || '말을 해'

  if (config.IS_LOCAL_TEST) {
    return await interaction.createMessage('로컬 테스트라고 하자나!')
  }

  const hash = Date.now()
  const path = config.VOICE_OUTPUT_PATH
  const file = `${path}/${hash}.mp3`

  await saveVoiceToDisk(
    () =>
      createVoice({
        Text: message,
      }),
    file
  )

  const converted = await watchDirectory(path)
  const convertedFile = `${path}/${converted}`

  connection?.play(convertedFile || file)
}

export const JoinHandler: InteractionHandler = async (interaction) => {
  if (
    interaction.data.options?.[0].type !==
    Constants.ApplicationCommandOptionTypes.CHANNEL
  ) {
    return
  }

  const client = getClient()
  const channelID = interaction.data.options[0].value

  connection = await client.joinVoiceChannel(channelID)

  interaction.createMessage(`<#${channelID}> 채널에 들어갔어!`)
}

export const LeaveHandler: InteractionHandler = async (interaction) => {
  const channelID = connection?.channelID
  connection?.disconnect()

  interaction.createMessage(`<#${channelID}> 채널에서 나왔어!`)
}
