import type { ApplicationCommandStructure } from 'eris'

import type { ClientType } from '../libs/eris'

import { config } from '../configs/index.js'

export const getArg = (str: string) => {
  const arr = str.split(' ')
  arr.shift()
  return arr
}

export const createCommandInitializer = (
  bot: ClientType,
  struct: ApplicationCommandStructure
) => {
  return () => bot.createGuildCommand(config.DISCORD_DEFAULT_GUILD_ID, struct)
}
