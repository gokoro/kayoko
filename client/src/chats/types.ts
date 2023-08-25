import type {
  ApplicationCommandStructure,
  CommandInteraction,
  TextableChannel,
} from 'eris'

import type { ClientType } from '../libs/eris.js'

export type RegisterModule = (
  bot: ClientType
) => RegisterModuleReturnedContext | void

export type InteractionHandler = (
  interaction: CommandInteraction
) => Promise<void> | void

export interface Interaction {
  handler: InteractionHandler
  name: string
}

export interface RegisterModuleReturnedContext {
  commandInteractions?: Interaction[]
  guildCommands?: ApplicationCommandStructure[]
}
