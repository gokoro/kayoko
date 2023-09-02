import * as awsx from '@pulumi/awsx'
import * as aws from '@pulumi/aws'

import * as config from '../configs'

type Container = awsx.types.input.ecs.TaskDefinitionContainerDefinitionArgs
type Volume = aws.types.input.ecs.TaskDefinitionVolume

const containers: Record<string, Container> = {
  client: {
    image: 'ghcr.io/gokoro/kayoko-client:latest',
    essential: true,
    mountPoints: [
      {
        containerPath: '/app/output',
        sourceVolume: 'output',
      },
    ],
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
        name: 'IS_AWS',
        value: config.CLIENT_IS_AWS,
      },
      {
        name: 'VOICE_OUTPUT_PATH',
        value: config.CLIENT_VOICE_OUTPUT_PATH,
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
  rvc: {
    image: 'ghcr.io/gokoro/kayoko-rvc:latest',
    essential: true,
    mountPoints: [
      {
        containerPath: '/app/rvc/voice-output',
        sourceVolume: 'output',
      },
    ],
    resourceRequirements: [
      {
        type: 'GPU',
        value: '1',
      },
    ],
    environment: [
      {
        name: 'NVIDIA_DRIVER_CAPABILITIES',
        value: 'all',
      },
    ],
  },
}

const volumes: Volume[] = [
  {
    name: 'output',
    hostPath: '/app/output',
  },
]

const pollyPolicy = aws.iam.getPolicy({
  name: 'AmazonPollyFullAccess',
})

export function create() {
  const defaultTask = new awsx.ecs.EC2TaskDefinition('kayoko-default-task', {
    memory: '4096',
    networkMode: 'host',
    runtimePlatform: {
      operatingSystemFamily: 'LINUX',
      cpuArchitecture: 'X86_64',
    },
    taskRole: {
      args: {
        inlinePolicies: [
          {
            name: pollyPolicy.then((p) => p.name),
            policy: pollyPolicy.then((p) => p.policy),
          },
        ],
      },
    },
    containers,
    volumes,
  })

  return [defaultTask]
}
