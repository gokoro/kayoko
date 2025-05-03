import { RegisterModule, RegisterModuleReturnedContext } from '../types.js'
import { handler as WWHandler } from './whose-waifus/index.js'

const createContext = (): RegisterModuleReturnedContext => ({
  messageCreation: [{ handler: WWHandler }],
})

export const integrations: RegisterModule = (bot) => {
  return createContext()
}
