import { Constants } from 'eris'

import type { RegisterModule, RegisterModuleReturnedContext } from '../types.js'

import { JoinHandler, LeaveHandler, SayHandler } from './handlers.js'

const ReturnContext: RegisterModuleReturnedContext = {
  guildCommands: [
    {
      name: 'say',
      description: '코하루에게 말을 걸어봐요',
      type: Constants.ApplicationCommandTypes.CHAT_INPUT,
      options: [
        {
          name: 'phrases',
          description: '코하루에게 듣고 싶은 말',
          type: Constants.ApplicationCommandOptionTypes.STRING,
          required: true,
        },
      ],
    },
    {
      name: 'join',
      description: '음성 채널에 코하루가 들어와요',
      type: Constants.ApplicationCommandTypes.CHAT_INPUT,
      options: [
        {
          name: 'channel',
          description: '채널',
          type: Constants.ApplicationCommandOptionTypes.CHANNEL,
          // Incorrect `channel_types`; should be the list of channel type to be shown
          // @ts-ignore
          channel_types: [Constants.ChannelTypes.GUILD_VOICE],
          required: true,
        },
      ],
    },
    {
      name: 'leave',
      description: '코하루가 음성 채널에서 나가요',
      type: Constants.ApplicationCommandTypes.CHAT_INPUT,
    },
  ],

  commandInteractions: [
    {
      name: 'say',
      handler: SayHandler,
    },
    {
      name: 'join',
      handler: JoinHandler,
    },
    {
      name: 'leave',
      handler: LeaveHandler,
    },
  ],
}

export const voices: RegisterModule = () => {
  return ReturnContext
}
