import Eris, { Message, PossiblyUncachedTextableChannel } from 'eris'

import type { ClientType } from '../../libs/eris.js'
import type { MessageCreationHandler, RegisterModule, RegisterModuleReturnedContext } from '../types.js'

import { determiners, substituters } from './handlers.js'

type PrimaryMessage = Message<PossiblyUncachedTextableChannel>

interface MessageMenifestForSubstitution {
  mention?: {
    users: Eris.User[]
  }
  reply?: {
    message: PrimaryMessage
  }
  substitution: boolean
  type?: 'mention' | 'normal' | 'reply'
}

const createDeterminerPipe = (
  determiner: (message: string) => boolean
): ((message: PrimaryMessage) => MessageMenifestForSubstitution) => {
  return (message) => {
    const menifest: MessageMenifestForSubstitution = { type: 'normal', substitution: true }
    let content = message.content

    if (message.referencedMessage?.type == 0) {
      menifest.type = 'reply'
      menifest.reply = { message: message.referencedMessage }
    } else if (message.mentions.length > 0) {
      menifest.type = 'mention'
      menifest.mention = { users: message.mentions }

      for (const mentionedMember of message.mentions) {
        const mentionPayload = '<@' + mentionedMember.id + '>'

        content = content.replace(mentionPayload, '')
      }

      content = content.trim()
    }

    const substitution = determiner(content)

    if (!substitution) {
      return { substitution: false }
    }

    return menifest
  }
}

const createSubstituterPipe = (
  bot: ClientType,
  substituter: (message: string) => { message: string }
): ((message: PrimaryMessage, menifest: MessageMenifestForSubstitution) => void) => {
  return (message, menifest) => {
    const substituted = substituter(message.content)

    const callerIndicatedMessage = `${message.author.mention} - ${substituted.message}`

    if (menifest.type == 'mention') {
    }

    if (menifest.type == 'reply' && menifest.reply) {
      bot.createMessage(message.channel.id, {
        content: callerIndicatedMessage,
        messageReference: {
          messageID: menifest.reply.message.id,
        },
        allowedMentions: {
          users: true,
        },
      })
    }

    if (menifest.type == 'normal') {
      bot.createMessage(message.channel.id, {
        content: callerIndicatedMessage,
        allowedMentions: {
          users: true,
        },
      })
    }

    bot.deleteMessage(message.channel.id, message.id)
  }
}

const substitutionPipeline: MessageCreationHandler = (bot, message) => {
  const determinerPipes = [createDeterminerPipe(determiners.Arca), createDeterminerPipe(determiners.Instagram)]
  const substituterPipes = [
    createSubstituterPipe(bot, substituters.Arca),
    createSubstituterPipe(bot, substituters.Instagram),
  ]

  for (let i = 0; i < determinerPipes.length; i++) {
    const determiner = determinerPipes[i]
    const menifest = determiner(message)

    if (menifest.substitution) {
      const substituer = substituterPipes[i]

      substituer(message, menifest)
    }
  }
}

const createContext = (): RegisterModuleReturnedContext => ({
  messageCreation: [{ handler: substitutionPipeline }],
})

export const proxys: RegisterModule = (bot) => {
  return createContext()
}
