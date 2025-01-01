import { CommandInteraction } from 'eris'

import type { ClientType } from '../libs/eris.js'
import type { RegisterModule, RegisterModuleReturnedContext } from './types.js'

import { config } from '../configs/index.js'
import { proxys } from './proxys/index.js'
import { voices } from './voices/index.js'

async function handleContext(bot: ClientType, context: RegisterModuleReturnedContext): Promise<void> {
  if (!bot.ready) return

  if (context.guildCommands) {
    const existingCommands = await bot.getCommands()

    if (existingCommands.length != context.guildCommands.length) {
      context.guildCommands?.forEach((command) => bot.createCommand(command))
    }

    const guildID = config.DISCORD_DEFAULT_GUILD_ID

    if (guildID) {
      const existingGuildCommands = await bot.getGuildCommands(guildID)

      if (existingGuildCommands.length != context.guildCommands.length) {
        context.guildCommands?.forEach((command) => bot.createGuildCommand(guildID, command))
      }
    }
  }

  bot.on('interactionCreate', (createdInt) => {
    if (!(createdInt instanceof CommandInteraction)) return

    const interaction = context.commandInteractions?.find(({ name }) => name === createdInt.data.name)

    interaction?.handler(createdInt)
  })

  bot.on('messageCreate', (message) => context.messageCreation?.forEach(({ handler }) => handler(bot, message)))
}

export const register: RegisterModule = (bot) => {
  const voiceContext = voices(bot)
  const proxyContext = proxys(bot)

  const contexts = [voiceContext, proxyContext]

  bot.once('ready', () => {
    contexts.forEach((ctx) => ctx && handleContext(bot, ctx))
  })
}
