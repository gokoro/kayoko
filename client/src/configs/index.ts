const getBool = (key: string, value: string | undefined) => {
  switch (value) {
    case 'true':
      return true
    case 'false':
      return false
    default:
      throw new Error(`Boolean Env for the key ${key} is not properly set.`)
  }
}

export const config = {
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID ?? '',
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN as string,
  DISCORD_DEFAULT_GUILD_ID: process.env.DISCORD_DEFAULT_GUILD_ID as string,
  IS_LOCAL_TEST: getBool('IS_LOCAL_TEST', process.env.IS_LOCAL_TEST ?? 'false'),
  IS_AWS: getBool('IS_LOCAL_TEST', process.env.IS_LOCAL_TEST ?? 'false'),
  VOICE_OUTPUT_PATH: process.env.VOICE_OUTPUT_PATH ?? './output',
  RVC_URL: process.env.RVC_URL as string,
}

Object.entries(config).forEach(([key, value]) => {
  if (typeof value === 'undefined')
    throw new Error(
      `Env for the key ${key} isn't provided. Make sure that you set the environment variable properly.`
    )
})
