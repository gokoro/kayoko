import Eris, { Message, PossiblyUncachedTextableChannel } from 'eris'

import type { ClientType } from '../../libs/eris.js'
import type { MessageCreationHandler, RegisterModule, RegisterModuleReturnedContext } from '../types.js'
import type { Determiner, Substituter } from './handlers.js'

import { webhook } from '../../bot/index.js'
import { UserIds } from '../../bot/webhook-user.js'
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
  determiner: Determiner
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
  substituter: Substituter
): ((message: PrimaryMessage, menifest: MessageMenifestForSubstitution) => void) => {
  return (message, menifest) => {
    const substituted = substituter(message.content)

    if (menifest.type == 'mention') {
      webhook.createMessage(bot, message.channel.id, message.author, {
        ...substituted,

        allowedMentions: {
          users: true,
        },
      })
    }

    if (menifest.type == 'reply' && menifest.reply) {
      // Need to implement w/ webhooks and components such as buttons to indicate an original message
      if (substituted.content) {
        substituted.content = `${message.author.mention} - ${substituted.content}`
      }

      if (substituted.embeds) {
        for (const embed of substituted.embeds) {
          embed.author = {
            name: message.author.globalName ?? message.author.username,
            icon_url: message.author.avatarURL,
          }
        }
      }

      bot.createMessage(message.channel.id, {
        ...substituted,
        messageReference: {
          messageID: menifest.reply.message.id,
        },
        allowedMentions: {
          users: true,
        },
      })
    }

    if (menifest.type == 'normal') {
      webhook.createMessage(bot, message.channel.id, message.author, {
        ...substituted,

        allowedMentions: {
          users: true,
        },
      })
    }

    bot.deleteMessage(message.channel.id, message.id)
  }
}

const substitutionPipeline: MessageCreationHandler = (bot, message) => {
  const determinerPipes = [
    // createDeterminerPipe(determiners.Arca),
    createDeterminerPipe(determiners.Instagram),
    createDeterminerPipe(determiners.Emoji),
    createDeterminerPipe(determiners.Pixiv),
  ]
  const substituterPipes = [
    // createSubstituterPipe(bot, substituters.Arca),
    createSubstituterPipe(bot, substituters.Instagram),
    createSubstituterPipe(bot, substituters.Emoji),
    createSubstituterPipe(bot, substituters.Pixiv),
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
