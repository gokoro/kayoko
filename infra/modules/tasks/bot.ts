import * as awsx from '@pulumi/awsx'
import * as aws from '@pulumi/aws'

import * as config from '../../configs'

import type * as Type from './types'

const containers: Record<string, Type.Container> = {
  client: {
    name: 'client',
    image: 'ghcr.io/gokoro/kayoko-client:latest',

    essential: true,
    environment: [
      {
        name: 'DISCORD_BOT_TOKEN',
        value: config.CLIENT_DISCORD_BOT_TOKEN,
      },
      {
        name: 'DISCORD_DEFAULT_GUILD_ID',
        value: config.CLIENT_DISCORD_DEFAULT_GUILD_ID,
      },
      {
        name: 'RVC_URL',
        value: 'http://rvc.kayoko-area:5000',
      },
      {
        name: 'IS_AWS',
        value: 'true',
      },
    ],
    // logConfiguration: {
    //   logDriver: 'awslogs',
    //   options: {
    //     'awslogs-create-group': 'true',
    //     'awslogs-group': 'true',
    //     'awslogs-region': 'true',
    //     'awslogs-stream-prefix': 'true',
    //   },
    // },
  },
}

const instanceAssumeRolePolicy = aws.iam.getPolicyDocument({
  statements: [
    {
      actions: ['sts:AssumeRole'],
      principals: [
        {
          type: 'Service',
          identifiers: ['ecs-tasks.amazonaws.com'],
        },
      ],
    },
  ],
})

const pollyPolicy = aws.iam.getPolicy({
  name: 'AmazonPollyFullAccess',
})

const role = new aws.iam.Role('kayoko-task-role', {
  assumeRolePolicy: instanceAssumeRolePolicy.then(
    (instanceAssumeRolePolicy) => instanceAssumeRolePolicy.json
  ),

  inlinePolicies: [
    {
      name: pollyPolicy.then((p) => p.name),
      policy: pollyPolicy.then((p) => p.policy),
    },
  ],
})

export function create() {
  const defaultTask = new aws.ecs.TaskDefinition('kayoko-task-bot', {
    family: 'kayoko-bot',
    memory: '4096',
    networkMode: 'bridge',

    runtimePlatform: {
      operatingSystemFamily: 'LINUX',
      cpuArchitecture: 'X86_64',
    },
    taskRoleArn: role.arn,
    containerDefinitions: JSON.stringify(Object.values(containers)),
  })

  return defaultTask
}
