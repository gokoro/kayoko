import type { User, Webhook, WebhookPayload } from 'eris'

import type { ClientType } from '../libs/eris.js'

export const PredefinedWebhookName = 'managedByKayoko'

export const WebhookIds = new Map<string, Webhook>()
export const UserIds = new Map<string, string>()

export async function createWebhook(bot: ClientType, channelId: string) {
  return await bot.createChannelWebhook(channelId, { name: PredefinedWebhookName })
}

export async function createMessage(bot: ClientType, channelId: string, user: User, payload: WebhookPayload) {
  let webhook = WebhookIds.get(channelId)

  if (!webhook) {
    webhook = await createWebhook(bot, channelId)
    WebhookIds.set(channelId, webhook)
  }

  if (!webhook.token) {
    throw new Error('Webhook token is unavailable for the webhook: ' + webhook.name)
  }

  return await bot.executeWebhook(webhook.id, webhook.token, {
    username: UserIds.get(user.id) ?? user.username,
    avatarURL: user.avatarURL,
    ...payload,
  })
}
