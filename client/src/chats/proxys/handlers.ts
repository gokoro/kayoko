import type { MessageCreationHandler } from '../types.js'

import { config } from '../../configs/index.js'

const origin = 'https://arca.live'

export const ArcaHandler: MessageCreationHandler = (bot, message) => {
  if (message.content.startsWith(origin)) {
    const target = message.content.replace(origin, '')
    const content = `${message.author.mention} - ${config.ARCA_PROXY_URL}${target}`

    bot.createMessage(message.channel.id, {
      content,
      allowedMentions: {
        users: true,
      },
    })

    bot.deleteMessage(message.channel.id, message.id)
  }
}
