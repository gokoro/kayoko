import * as pulumi from '@pulumi/pulumi'

const config = new pulumi.Config('infra')

// export const REGION = config.get('region')
export const REGION = 'ap-northeast-2'
// export const AZ = config.getObject<string[]>('az') || []
export const AZ = ['a', 'b', 'c']

export const CLIENT_DISCORD_BOT_TOKEN = config.require(
  'client-discord-bot-token'
)
export const CLIENT_DISCORD_DEFAULT_GUILD_ID = config.require(
  'client-discord-default-guild-id'
)

export const SD_ZONEID = config.require('sd-zoneId')

export const TAILSCALE_AUTH_KEY = config.getSecret('TAILSCALE_AUTH_KEY')
