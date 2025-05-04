import got from 'got'

import { config } from '../../../configs/index.js'
import { MessageCreationHandler } from '../../types.js'

const {
  INTG_WAIFU_TARGET_GUILD: guildId,
  INTG_WAIFU_TARGET_CHANNEL: channelId,
  INTG_WAIFU_TARGET_USER: userId,
  INTG_WAIFU_ENDPOINT: endpoint,
} = config

const buildAvatarUrl = (userId: string, avatarHash: string) =>
  `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.webp`

export const handler: MessageCreationHandler = (bot, message) => {
  // If Configs not set
  if (!guildId || !channelId || !userId || !endpoint) {
    return
  }

  const isProperGuild = message.guildID === guildId
  const isProperChannel = message.channel.id === channelId
  const isProperUser = message.author.id === userId

  if (isProperGuild && isProperChannel && isProperUser) {
    const start = message.content.indexOf('<@')
    const end = message.content.indexOf('>')
    const originalUserId = message.content.substring(start + 2, end)

    if (!message.guildID) return

    const originalUser = bot.guilds.get(message.guildID)?.members.find((u) => u.id === originalUserId)

    if (!originalUser) return

    const urlStarts = message.content.indexOf('https://')
    const payload = {
      guildId,
      channelId,
      username: originalUser.username,
      userAvatar: originalUser.avatar ? buildAvatarUrl(originalUser.id, originalUser.avatar) : originalUser.avatarURL,
      content: message.content.substring(urlStarts),
    }

    got.post(endpoint, { json: payload })
  }
}
