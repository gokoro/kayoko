import { register as registerBot } from './chats/index.js'
import { getClient } from './libs/eris.js'
import { logger } from './libs/pino.js'

async function launch() {
  const bot = getClient()
  registerBot(bot)

  await bot.connect()

  process.on('uncaughtException', (err) => {
    logger.error(err)
  })

  process.on('exit', (code) => {
    bot.disconnect({})
  })
}

launch()
