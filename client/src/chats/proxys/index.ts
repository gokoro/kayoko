import { Constants } from 'eris'

import type { ClientType } from '../../libs/eris.js'
import type { RegisterModule, RegisterModuleReturnedContext } from '../types.js'

import { ArcaHandler, InstagramHandler } from './handlers.js'

const createContext = (): RegisterModuleReturnedContext => ({
  messageCreation: [{ handler: ArcaHandler }, { handler: InstagramHandler }],
})

export const proxys: RegisterModule = (bot) => {
  return createContext()
}
