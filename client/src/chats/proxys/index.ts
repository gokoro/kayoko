import { Constants } from 'eris'

import type { RegisterModule, RegisterModuleReturnedContext } from '../types.js'
import type { ClientType } from '../../libs/eris.js'

import { ArcaHandler } from './handlers.js'

const createContext = (): RegisterModuleReturnedContext => ({
  messageCreation: [{ handler: ArcaHandler }],
})

export const proxys: RegisterModule = (bot) => {
  return createContext()
}
