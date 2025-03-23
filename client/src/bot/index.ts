import type { ClientType } from '../libs/eris.js'

import { config } from '../configs/index.js'
import { PredefinedWebhookName, WebhookIds } from './webhook-user.js'

function handleCurrentStatus(bot: ClientType, message: string) {
  bot.editStatus([{ type: 4, state: message, name: message }])
}

async function preRetrieveWebhookIds(bot: ClientType) {
  for (const guildTuple of bot.guilds) {
    const [id, guild] = guildTuple
    const webhooks = await guild.getWebhooks()

    for (const webhook of webhooks) {
      if (webhook.name === PredefinedWebhookName && webhook.channel_id) {
        WebhookIds.set(webhook.channel_id, webhook)
      }
    }
  }
}

export function register(bot: ClientType) {
  handleCurrentStatus(bot, `Ship@${config.APP_VERSION.substring(0, 7)}`)

  bot.once('ready', () => {
    preRetrieveWebhookIds(bot)
  })
}

export * as webhook from './webhook-user.js'
