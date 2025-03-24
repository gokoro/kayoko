import type { Guild, Member, User, Webhook, WebhookPayload } from 'eris'

import type { ClientType } from '../libs/eris.js'

type WebhookWithProperToken = Webhook & {
  token: string
}

export const PredefinedWebhookName = 'managedByKayoko'

export const WebhookIds = new Map<string, Webhook>()
export const UserIdsToNickname = new Map<string, string>()

export async function createWebhook(bot: ClientType, channelId: string) {
  return await bot.createChannelWebhook(channelId, { name: PredefinedWebhookName })
}

async function getWebhookByChannelId(bot: ClientType, channelId: string): Promise<WebhookWithProperToken> {
  let webhook = WebhookIds.get(channelId)

  if (!webhook) {
    webhook = await createWebhook(bot, channelId)
    WebhookIds.set(channelId, webhook)
  }

  if (!webhook.token) {
    throw new Error('Webhook token is unavailable for the webhook: ' + webhook.name)
  }

  return webhook as WebhookWithProperToken
}

export async function createMessage(bot: ClientType, channelId: string, user: User, payload: WebhookPayload) {
  const webhook = await getWebhookByChannelId(bot, channelId)

  return await bot.executeWebhook(webhook.id, webhook.token, {
    username: UserIdsToNickname.get(user.id) ?? user.username,
    avatarURL: user.avatarURL,
    ...payload,
  })
}

export async function updateUserIds(guild: Guild, user: Member | User) {
  const oldNick = UserIdsToNickname.get(user.id)
  const [{ nick: newNick }] = await guild.searchMembers(user.username)

  const isNecessaryToUpdate = oldNick !== newNick && newNick

  if (isNecessaryToUpdate) {
    UserIdsToNickname.set(user.id, newNick)
  }

  return isNecessaryToUpdate
}
