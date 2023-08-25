import { Client } from 'eris'

import { config } from '../configs/index.js'

const token = config.DISCORD_BOT_TOKEN

if (!token)
  throw new Error(
    `Token of Discord isn't set. Make sure your environment variable is valid.`
  )

const ClientClass = Client

export type ClientType = InstanceType<typeof ClientClass>

export class ClientInstance {
  private client: ClientType

  constructor() {
    this.client = new ClientClass(token, {
      intents: ['guildMessages', 'guilds'],
    })
  }

  getInstance() {
    return this.client
  }
}

const instance = new ClientInstance()

export const getClient = () => instance.getInstance()
