import { CommandInteraction } from 'eris'

import type { ClientType } from '../libs/eris.js'
import type { RegisterModule, RegisterModuleReturnedContext } from './types.js'

import { config } from '../configs/index.js'
import { voices } from './voices/index.js'

function handleContext(
  bot: ClientType,
  context: RegisterModuleReturnedContext
): void {
  if (!bot.ready) return

  /*
   * Handle Guild Commands
   */
  context.guildCommands?.forEach((command) => {
    bot.createGuildCommand(config.DISCORD_DEFAULT_GUILD_ID, command)
  })

  /*
   * ...And their interactions
   */
  bot.on('interactionCreate', (createdInt) => {
    if (!(createdInt instanceof CommandInteraction)) return

    const interaction = context.commandInteractions?.find(
      ({ name }) => name === createdInt.data.name
    )

    interaction?.handler(createdInt)
  })
}

export const register: RegisterModule = (bot) => {
  const voiceContext = voices(bot)

  const contexts = [voiceContext]

  bot.once('ready', () => {
    contexts.forEach((ctx) => ctx && handleContext(bot, ctx))
  })
}
