import type { Output } from '@pulumi/pulumi'

import { register as registerRvc } from './rvc'
import { register as registerBot } from './bot'

export interface Args {
  clusterId: Output<string>
  namespaceArn: Output<string>
}

export function registerAll(args: Args) {
  registerRvc(args)
  registerBot(args)
}
