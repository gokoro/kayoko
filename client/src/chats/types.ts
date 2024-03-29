import type {
  ApplicationCommandStructure,
  CommandInteraction,
  TextableChannel,
  PossiblyUncachedTextableChannel,
  Message,
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

// ???
export type MessageCreationHandler<
  T extends PossiblyUncachedTextableChannel = PossiblyUncachedTextableChannel
> = (bot: ClientType, message: Message<T>) => Promise<void> | void

export interface MessageCreation {
  handler: MessageCreationHandler
}

export interface RegisterModuleReturnedContext {
  commandInteractions?: Interaction[]
  guildCommands?: ApplicationCommandStructure[]
  messageCreation?: MessageCreation[]
}
