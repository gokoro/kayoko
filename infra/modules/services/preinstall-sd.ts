import * as aws from '@pulumi/aws'

import type { Args } from '.'

import { create as createTask } from '../tasks/preinstall-sd'

const task = createTask()

export function register(args: Args) {
  const service = new aws.ecs.Service(`preinstall-sd`, {
    name: 'preinstall-sd',
    cluster: args.clusterId,

    propagateTags: 'TASK_DEFINITION',
    taskDefinition: task.arn,
    desiredCount: 0,

    forceNewDeployment: true,
  })

  return service
}
