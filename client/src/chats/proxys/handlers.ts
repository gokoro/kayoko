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

export const InstagramHandler: MessageCreationHandler = (bot, message) => {
  const origin = 'https://www.instagram.com'

  if (message.content.startsWith(origin) && !message.content.includes('/share/')) {
    const target = message.content.replace(origin, 'https://www.ddinstagram.com')
    const content = `${message.author.mention} - ${target}`

    bot.createMessage(message.channel.id, {
      content,
      allowedMentions: {
        users: true,
      },
    })

    bot.deleteMessage(message.channel.id, message.id)
  }
}
