import type { VoiceConnection } from 'eris'
import type { ReadableStream } from 'node:stream/web'

import { Constants } from 'eris'
import { FormData } from 'formdata-node'
import * as fs from 'fs/promises'
import got from 'got'
import { Readable } from 'node:stream'

import type { InteractionHandler } from '../types.js'

import { config } from '../../configs/index.js'
import { getClient } from '../../libs/eris.js'
import { createVoice, getVoiceAsBuffer } from '../../libs/polly.js'

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

async function getConvertedVoice(blob: Blob) {
  const url = `${config.RVC_URL}/audios`

  const form = new FormData()
  form.append('file', blob)

  const response = await got.post(url, { body: form }).buffer()

  return response
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

  const message = interaction.data.options?.[0].value

  if (config.IS_LOCAL_TEST) {
    return await interaction.createMessage('로컬 테스트라고 하자나!')
  }

  const hash = Date.now()
  const path = config.VOICE_OUTPUT_PATH
  const file = `${path}/${hash}.mp3`

  // const buffer = await getVoiceAsBuffer(() =>
  //   createVoice({
  //     Text: message,
  //   })
  // )

  const byteArray = await createVoice({
    Text: message,
  }).then(({ AudioStream }) => AudioStream?.transformToByteArray())
  console.log('stream:', byteArray)

  if (!byteArray) {
    throw new Error('Got an error while fetching converted voice stream')
  }
  const blob = new Blob([byteArray.buffer])
  const converted = await getConvertedVoice(blob)
  const stream = Readable.from(converted)

  // const converted = await watchDirectory(path)
  // const convertedFile = `${path}/${converted}`

  connection?.play(stream || file)

  interaction.createMessage(`말하고 있어!`)
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
