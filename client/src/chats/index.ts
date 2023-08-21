import type { RegisterModule } from './types.js'

import { voices } from './voices/index.js'

export const register: RegisterModule = (bot) => {
  voices(bot)

  bot.on('ready', () => {
    console.log('Ready!')
  })
}
