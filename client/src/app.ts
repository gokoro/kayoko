import { register as registerBotToConfig } from './bot/index.js'
import { register as registerBotToChat } from './chats/index.js'
import { getClient } from './libs/eris.js'
import { logger } from './libs/pino.js'

async function launch() {
  const bot = getClient()

  registerBotToChat(bot)
  registerBotToConfig(bot)

  await bot.connect()

  process.on('uncaughtException', (err) => {
    logger.error(err)
  })

  process.on('exit', () => {
    bot.disconnect({})
  })
}

launch()
