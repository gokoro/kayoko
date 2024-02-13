import * as aws from '@pulumi/aws'

import type { Args } from '.'

import { create as createTask } from '../tasks/sd'
import { serviceDiscoveryService } from '../service-discovery'
import { subnets } from '../vpc'

const task = createTask()

export function register(args: Args) {
  const service = new aws.ecs.Service(`kayoko-service-sd`, {
    name: 'kayoko-sd',
    cluster: args.clusterId,

    serviceConnectConfiguration: {
      enabled: true,
      namespace: args.namespaceArn,
    },

    serviceRegistries: {
      registryArn: serviceDiscoveryService.arn,
      containerName: 'sd',
    },

    networkConfiguration: {
      subnets: subnets.map((s) => s.id),
    },

    taskDefinition: task.arn,
    desiredCount: 1,
    forceNewDeployment: true,
  })

  return service
}
