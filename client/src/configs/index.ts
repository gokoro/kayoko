import { z } from 'zod'

const envSchema = z.object({
  APP_VERSION: z.string().default('unknown'),
  AWS_ACCESS_KEY_ID: z.string().default('123'),
  AWS_SECRET_ACCESS_KEY: z.string().default(''),
  IS_LOCAL_TEST: z
    .enum(['true', 'false'])
    .default('false')
    .transform((val) => val === 'true'),
  IS_AWS: z
    .enum(['true', 'false'])
    .default('false')
    .transform((val) => val === 'true'),
  VOICE_OUTPUT_PATH: z.string().default('./output'),
  RVC_URL: z.string().optional().default(''),
  ARCA_PROXY_URL: z.string().default(''),

  DISCORD_BOT_TOKEN: z.string().min(1),
  DISCORD_DEFAULT_GUILD_ID: z.string().optional(),

  // Temporary
  INTG_WAIFU_TARGET_GUILD: z.string().optional(),
  INTG_WAIFU_TARGET_CHANNEL: z.string().optional(),
  INTG_WAIFU_TARGET_USER: z.string().optional(),
  INTG_WAIFU_ENDPOINT: z.string().optional(),
})

const parsedEnv = envSchema.parse(process.env)

export const config = {
  APP_VERSION: parsedEnv.APP_VERSION,
  AWS_ACCESS_KEY_ID: parsedEnv.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: parsedEnv.AWS_SECRET_ACCESS_KEY,
  IS_LOCAL_TEST: parsedEnv.IS_LOCAL_TEST,
  IS_AWS: parsedEnv.IS_AWS,
  VOICE_OUTPUT_PATH: parsedEnv.VOICE_OUTPUT_PATH,
  RVC_URL: parsedEnv.RVC_URL,
  ARCA_PROXY_URL: parsedEnv.ARCA_PROXY_URL,
  DISCORD_BOT_TOKEN: parsedEnv.DISCORD_BOT_TOKEN,
  DISCORD_DEFAULT_GUILD_ID: parsedEnv.DISCORD_DEFAULT_GUILD_ID,

  // Temporary
  INTG_WAIFU_TARGET_GUILD: parsedEnv.INTG_WAIFU_TARGET_GUILD,
  INTG_WAIFU_TARGET_CHANNEL: parsedEnv.INTG_WAIFU_TARGET_CHANNEL,
  INTG_WAIFU_TARGET_USER: parsedEnv.INTG_WAIFU_TARGET_USER,
  INTG_WAIFU_ENDPOINT: parsedEnv.INTG_WAIFU_ENDPOINT,
}
