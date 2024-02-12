import * as aws from '@pulumi/aws'

import type { Args } from '.'

import { create as createTask } from '../tasks/rvc'

const task = createTask()

export function register(args: Args) {
  const service = new aws.ecs.Service(`kayoko-service-rvc`, {
    name: 'kayoko-rvc',
    cluster: args.clusterId,

    serviceConnectConfiguration: {
      enabled: true,
      namespace: args.namespaceArn,
      services: [
        {
          portName: 'http',
          discoveryName: 'rvc',
          clientAlias: [
            {
              port: 5000,
            },
          ],
        },
      ],
    },
    taskDefinition: task.arn,
    desiredCount: 1,
    forceNewDeployment: true,
  })

  return service
}
