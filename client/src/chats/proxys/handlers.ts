import { URL } from 'node:url'

import type { MessageCreationHandler } from '../types.js'

import { config } from '../../configs/index.js'

const origin = 'https://arca.live'

// Only filters profile routes;
// Invalid routes will still shown as supported
function isRouteToProfile(url: string) {
  // Gather minimum search range
  // 1. This will cut off possible trailing slash
  url = url.slice(20 /* 'http://instagram.com'.length */, 56 /* 'https://www.instagram.com/'.length + 30 */)

  // Fast exit in case of minimum username length hit
  if (url.length < 2 /* '/a' */) {
    return false
  }

  for (let pos = 0, seen = 0; pos < url.length; pos++) {
    // Supported in case of
    // 1. count of accumulative slashes of geq 2
    // 2. not a trailing slash
    if (
      url.charCodeAt(pos) === 47 /* '/'.charCodeAt() */ &&
      ++seen >= 2 &&
      url.charCodeAt(++pos) !== 63 /* '?'.charCodeAt() */ &&
      // Note `pos` was increased right before this evaluation
      pos !== url.length
    ) {
      return false
    }
  }

  return true
}

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
    if (isRouteToProfile(message.content)) return

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
