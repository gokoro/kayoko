import type { SynthesizeSpeechCommandInput } from '@aws-sdk/client-polly'

import { PollyClient, SynthesizeSpeechCommand } from '@aws-sdk/client-polly'
import * as fs from 'fs/promises'

import { config } from '../configs/index.js'

const region = 'ap-northeast-2'

export const client = new PollyClient({
  region,
  ...(!config.IS_AWS && {
    credentials: {
      accessKeyId: config.AWS_ACCESS_KEY_ID,
      secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    },
  }),
})

export function createVoice(
  input: Pick<
    Partial<SynthesizeSpeechCommandInput>,
    'OutputFormat' | 'VoiceId'
  > &
    Omit<SynthesizeSpeechCommandInput, 'OutputFormat' | 'VoiceId'>
) {
  const command = new SynthesizeSpeechCommand({
    VoiceId: 'Seoyeon',
    OutputFormat: 'mp3',
    Engine: 'neural',

    ...input,
  })

  return client.send(command)
}

export async function saveVoiceToDisk(
  instance: () => ReturnType<typeof createVoice>,
  path: string
) {
  const { AudioStream } = await instance()

  if (!AudioStream) {
    throw new Error('Error occured during creating voices from Amazon Polly.')
  }

  const buffer = await AudioStream.transformToByteArray()

  fs.writeFile(path, buffer)
}
