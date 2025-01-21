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

const targets = ['Arca', 'Instagram'] as const

type Determiner = (message: string) => boolean
type Substituter = (message: string) => { message: string }

type Determiners = {
  [K in (typeof targets)[number]]: Determiner
}

type Substituters = {
  [K in (typeof targets)[number]]: Substituter
}

const determinerOfArca: Determiner = (message) => {
  return message.includes('https://arca.live')
}

const determinerOfInstagram: Determiner = (message) => {
  return message.includes('https://www.instagram.com') && !message.includes('/share/') && !isRouteToProfile(message)
}

const substituterOfArca: Substituter = (message) => {
  return { message: message.replace('https://arca.live', config.ARCA_PROXY_URL) }
}

const substituterOfInstagram: Substituter = (message) => {
  return { message: message.replace('instagram.com', 'ddinstagram.com') }
}

export const determiners: Determiners = {
  Arca: determinerOfArca,
  Instagram: determinerOfInstagram,
}

export const substituters: Substituters = {
  Arca: substituterOfArca,
  Instagram: substituterOfInstagram,
}
