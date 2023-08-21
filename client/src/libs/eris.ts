import { Client } from 'eris'

const token = process.env.DISCORD_BOT_TOKEN

if (!token)
  throw new Error(
    `Token of Discord isn't set. Make sure your environment variable is valid.`
  )

export const createBot = () => new Client(token)
