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
    const [originalUser] = message.mentions

    const urlStarts = message.content.indexOf('https://')
    const payload = {
      guildId,
      channelId,
      username: originalUser.username,
      userAvatar: originalUser.avatar ? buildAvatarUrl(originalUser.id, originalUser.avatar) : '',
      content: message.content.substring(urlStarts),
    }

    got.post(endpoint, { json: payload })
  }
}
