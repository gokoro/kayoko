import * as aws from '@pulumi/aws'

import type { Args } from '.'

import { create as createTask } from '../tasks/bot'

const task = createTask()

export function register(args: Args) {
  const service = new aws.ecs.Service(`kayoko-service-bot`, {
    name: 'kayoko-bot',
    cluster: args.clusterId,
    serviceConnectConfiguration: {
      enabled: true,
      namespace: args.namespaceArn,
      // services: [
      //   {
      //     portName: 'http',
      //     discoveryName: 'bot',
      //     clientAlias: [
      //       {
      //         port: 4000,
      //       },
      //     ],
      //   },
      // ],
    },
    taskDefinition: task.arn,
    desiredCount: 1,
    forceNewDeployment: true,
  })

  return service
}
