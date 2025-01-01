import type { ClientType } from '../libs/eris.js'

import { config } from '../configs/index.js'

function handleCurrentStatus(bot: ClientType, message: string) {
  bot.editStatus([{ type: 4, state: message, name: message }])
}

export function register(bot: ClientType) {
  handleCurrentStatus(bot, `Ship@${config.APP_VERSION.substring(0, 7)}`)
}
