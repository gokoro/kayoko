import Eris, { InteractionDataOptionWithValue } from 'eris'
import got, { ParseError } from 'got'

import { config } from '../../../configs/index.js'
import { InteractionHandler, MessageCreationHandler } from '../../types.js'
import { VXTwitterAPIResponse } from './types.js'

type Message =
  | Eris.Message<Eris.DMChannel>
  | Eris.Message<Eris.GuildTextableChannel>
  | Eris.Message<Eris.PossiblyUncachedTextableChannel>

type APIPayload = {
  content: string
  imageUrl: string
  userAvatar: string
  username: string
}

const {
  INTG_WAIFU_TARGET_GUILD: guildId,
  INTG_WAIFU_TARGET_CHANNEL: channelId,
  INTG_WAIFU_TARGET_USER: userId,
  INTG_WAIFU_ENDPOINT: endpoint,
} = config

const buildAvatarUrl = (userId: string, avatarHash: string) =>
  `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.webp`

const isMatching = (message: Message) => {
  // If Configs not set
  if (!guildId || !channelId || !userId || !endpoint) {
    return
  }

  const isProperGuild = message.guildID === guildId
  const isProperChannel = message.channel.id === channelId
  const isProperUser = message.author.id === userId

  return isProperGuild && isProperChannel && isProperUser
}

const parseEmbedInformation = (message: Message) => {
  if (!isMatching(message)) return null

  const start = message.content.indexOf('<@')
  const end = message.content.indexOf('>')
  const userId = message.content.substring(start + 2, end)

  const urlStarts = message.content.indexOf('https://')

  if (urlStarts < 0) return null

  return {
    guildId,
    channelId,
    userId,
    content: message.content.substring(urlStarts),
  }
}

const getMemberByUserId = (m: Eris.Collection<Eris.Member>, id: string) => m.find((u) => u.id === id)

const registerEmbedInfoToApi = (payload: APIPayload | APIPayload[]) => {
  if (!endpoint) {
    throw new Error('`INTG_WAIFU_ENDPOINT` is not set but call to API is created.')
  }

  return got.post(endpoint, {
    json: payload,
  })
}

async function getXMediaEmbedData(url: string) {
  const candidates = ['vxtwitter.com', 'x.com', 'twitter.com']
  let replaced = ''

  for (const candidate of candidates) {
    if (url.includes(candidate)) {
      replaced = url.replace(candidate, 'api.vxtwitter.com')
      break
    }
  }

  try {
    return await got.get(replaced).json<VXTwitterAPIResponse>()
  } catch (error) {
    return null
  }
}

const getXImageFromUrl = (url: string) => getXMediaEmbedData(url).then((d) => d?.mediaURLs[0])

export const newMessagehandler: MessageCreationHandler = async (bot, message) => {
  if (!message.guildID) return

  const embedInfo = parseEmbedInformation(message)

  if (embedInfo === null) return

  const guild = bot.guilds.get(message.guildID)

  if (!guild?.members) return

  const user = getMemberByUserId(guild?.members, embedInfo.userId)

  if (!user) return

  const imageUrl = await getXImageFromUrl(embedInfo.content)

  if (!imageUrl) return

  registerEmbedInfoToApi({
    ...embedInfo,
    username: user.username,
    userAvatar: user.avatar ? buildAvatarUrl(user.id, user.avatar) : user.avatarURL,
    imageUrl,
  })
}

export const dumpCommandHandler: InteractionHandler = async (interaction) => {
  const desiredDumpCount =
    ((interaction.data.options as InteractionDataOptionWithValue[])?.find((o) => o.name === 'count')
      ?.value as number) || 100

  const totalMessages: Message[] = []
  let countLeft = desiredDumpCount
  let stop: string = ''

  const m1 = 'Fetching Messages from past dialogues...'
  await interaction.createMessage(m1)

  while (true) {
    const messages = await interaction.channel.getMessages({
      limit: countLeft <= 100 ? countLeft : 100, // step: 100
      ...(stop ? { before: stop } : {}),
    })

    if (messages.length === 0) break

    totalMessages.push(...messages)

    countLeft -= messages.length

    await interaction.editOriginalMessage(`${m1} - ${countLeft} items left...`)
    if (countLeft <= 0) break

    stop = messages[messages.length - 1].id
  }

  await interaction.editOriginalMessage(`${m1} - ${countLeft} items left... Done.`)

  let registeredCount = 0

  const m2 = await interaction.createFollowup('Registering info to API...')

  const artifacts = []

  for (const message of totalMessages) {
    const embedInfo = parseEmbedInformation(message)

    if (embedInfo === null) continue

    const guild = interaction.member?.guild

    if (!guild?.members) continue

    const user = getMemberByUserId(guild?.members, embedInfo.userId)

    if (!user) continue

    const imageUrl = await getXImageFromUrl(embedInfo.content)

    if (!imageUrl) continue

    registeredCount++

    artifacts.push({
      ...embedInfo,
      username: user.username,
      userAvatar: user.avatar ? buildAvatarUrl(user.id, user.avatar) : user.avatarURL,
      imageUrl,
    })
  }

  await interaction.editMessage(m2.id, `${m2.content} - Adding ${registeredCount} items...`)

  await registerEmbedInfoToApi(artifacts)

  await interaction.editMessage(m2.id, `${m2.content} - Adding ${registeredCount} items... Done.`)
}
