import { register as registerBot } from './chats/index.js'
import { createBot } from './libs/eris.js'
import { createVoice, saveVoiceToDisk } from './libs/polly.js'

async function launch() {
  const bot = createBot()
  registerBot(bot)

  bot.connect()

  process.on('exit', (code) => {
    bot.disconnect({})
  })
}

launch()
