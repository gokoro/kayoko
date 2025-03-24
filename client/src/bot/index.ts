import type { ClientType } from '../libs/eris.js'

import { config } from '../configs/index.js'
import { PredefinedWebhookName, UserIdsToNickname, WebhookIds, updateUserIds } from './webhook-user.js'

function handleCurrentStatus(bot: ClientType, message: string) {
  bot.editStatus([{ type: 4, state: message, name: message }])
}

async function presetWebhooks(bot: ClientType) {
  for (const guildTuple of bot.guilds) {
    const [, guild] = guildTuple
    const webhooks = await guild.getWebhooks()
    const users = await guild.fetchMembers()

    for (const webhook of webhooks) {
      if (webhook.name === PredefinedWebhookName && webhook.channel_id) {
        WebhookIds.set(webhook.channel_id, webhook)
      }
    }

    for (const user of users) {
      UserIdsToNickname.set(user.id, user.nick ?? user.globalName ?? user.username)
    }
  }
}

export function register(bot: ClientType) {
  handleCurrentStatus(bot, `Ship@${config.APP_VERSION.substring(0, 7)}`)

  bot.once('ready', () => {
    presetWebhooks(bot)
  })
}

export * as webhook from './webhook-user.js'
