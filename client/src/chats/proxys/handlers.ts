import { config } from '../../configs/index.js'

import type { MessageCreationHandler } from '../types.js'

export const ArcaHandler: MessageCreationHandler = (bot, message) => {
  if (message.content.startsWith('https://arca.live')) {
    const target = message.content.split('?')[0]
    const content = `${message.author.mention} - ${config.ARCA_PROXY_URL}/proxy?proxyUrl=${target}`

    bot.createMessage(message.channel.id, {
      content,
      allowedMentions: {
        users: true,
      },
    })

    bot.deleteMessage(message.channel.id, message.id)
  }
}
