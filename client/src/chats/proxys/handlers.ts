import { AdvancedMessageContent, Message, MessageContent } from 'eris'

import { config } from '../../configs/index.js'

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

function createEmojiCombiningUrl(ids: string[]): URL {
  const base = 'https://combining-image-worker.croe.io'
  const url = new URL(base)
  const params = url.searchParams

  params.set('auto', 'true')
  ids.forEach((id, i) => params.set(`image_${i}`, `https://cdn.discordapp.com/emojis/${id}.jpg`))

  return url
}

const targets = ['Arca', 'Instagram', 'Emoji'] as const

export type Determiner = (message: string) => boolean
export type Substituter = (message: string) => Partial<AdvancedMessageContent>

type Determiners = {
  [K in (typeof targets)[number]]: Determiner
}

type Substituters = {
  [K in (typeof targets)[number]]: Substituter
}

const matchWithEmoji = (m: string) => m.match(/<:[a-zA-Z0-9_]+:[0-9]+>/g)

const determinerOfArca: Determiner = (message) => {
  return message.includes('https://arca.live')
}

const determinerOfInstagram: Determiner = (message) => {
  return message.includes('https://www.instagram.com') && !message.includes('/share/') && !isRouteToProfile(message)
}

const determinerOfEmoji: Determiner = (message) => {
  const EMOJIS_THRESHOLD = 2
  const matched = matchWithEmoji(message)

  return matched !== null && matched.length >= EMOJIS_THRESHOLD
}

const substituterOfArca: Substituter = (message) => {
  return { content: message.replace('https://arca.live', config.ARCA_PROXY_URL) }
}

const substituterOfInstagram: Substituter = (message) => {
  return {
    content: message.replace('www.instagram.com', 'instagram.substitution.croe.io').replace(/igsh=[\w=]+&?/i, ''),
  }
  // return { content: message.replace('instagram.com', 'ddinstagram.com') }
}

const substituterOfEmoji: Substituter = (message) => {
  //<:a_:1330933829304713308>
  const matches = []

  for (let i = 0, l = message.length, paren = false, colon = 0; i < l; i++) {
    let char = message[i]

    if (!paren && char === '<') {
      paren = true
      continue
    }

    if (char === ':') {
      colon++
    }

    if (colon < 2) {
      continue
    }

    let end = message.indexOf('>', i)
    matches.push(message.slice(i + 1, end))

    i = end
    paren = false
    colon = 0
  }

  const url = createEmojiCombiningUrl(matches)

  return { embeds: [{ image: { url: url.toString() } }] }
}

export const determiners: Determiners = {
  Arca: determinerOfArca,
  Instagram: determinerOfInstagram,
  Emoji: determinerOfEmoji,
}

export const substituters: Substituters = {
  Arca: substituterOfArca,
  Instagram: substituterOfInstagram,
  Emoji: substituterOfEmoji,
}
