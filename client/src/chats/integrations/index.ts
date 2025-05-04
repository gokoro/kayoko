import { Constants } from 'eris'

import { RegisterModule, RegisterModuleReturnedContext } from '../types.js'
import {
  dumpCommandHandler as WWDumpCommandHandler,
  newMessagehandler as WWNewMessagehandler,
} from './whose-waifus/index.js'

const createContext = (): RegisterModuleReturnedContext => ({
  messageCreation: [{ handler: WWNewMessagehandler }],
  guildCommands: [
    {
      name: 'dump_waifus',
      description: 'Dump pictures sent in a specific channel',
      type: Constants.ApplicationCommandTypes.CHAT_INPUT,
      options: [
        {
          name: 'count',
          description: 'The number of messages the bot will retrieve from the present.',
          type: Constants.ApplicationCommandOptionTypes.INTEGER,
          required: false,
        },
      ],
    },
  ],
  commandInteractions: [{ handler: WWDumpCommandHandler, name: 'dump_waifus' }],
})

export const integrations: RegisterModule = (bot) => {
  return createContext()
}
