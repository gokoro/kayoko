import type { Output } from '@pulumi/pulumi'

import * as rvc from './rvc'
import * as bot from './bot'
import * as sd from './sd'

export interface Args {
  vpcId: Output<string>
  clusterId: Output<string>
  namespaceArn: Output<string>
  subnets: Output<string>[]
}

export function registerAll(args: Args) {
  // rvc.register(args)
  // bot.register(args)
  sd.register(args)
}
