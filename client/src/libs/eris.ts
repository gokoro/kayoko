import { Client } from 'eris'

import { config } from '../configs/index.js'

const token = config.DISCORD_BOT_TOKEN

const ClientClass = Client

export type ClientType = InstanceType<typeof ClientClass>

export class ClientInstance {
  private client: ClientType

  constructor() {
    this.client = new ClientClass(token, {
      intents: ['guildMessages', 'guilds', 'messageContent', 'guildWebhooks', 'guildMembers'],
    })
  }

  getInstance() {
    return this.client
  }
}

const instance = new ClientInstance()

export const getClient = () => instance.getInstance()
