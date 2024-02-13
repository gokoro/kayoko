import * as aws from '@pulumi/aws'

import * as configs from '../../configs'

import type * as Type from './types'

const containers: Record<string, Type.Container> = {
  sd: {
    name: 'sd',
    // image: 'ghcr.io/thirdscam/sd-webui-docker-a1111:v1.3.0',
    image: '798545013573.dkr.ecr.ap-northeast-2.amazonaws.com/kayoko-sd:latest',
    essential: true,
    portMappings: [
      {
        name: 'http',
        containerPort: 7890,
        // hostPort: 0,
        hostPort: 7890,
        appProtocol: 'http',
      },
    ],
    mountPoints: [
      {
        containerPath: '/data',
        sourceVolume: 'data',
      },
      {
        containerPath: '/output',
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
        name: 'COMMANDLINE_ARGS',
        value:
          '--allow-code --xformers --enable-insecure-extension-access --api',
      },
      {
        name: 'NVIDIA_DRIVER_CAPABILITIES',
        value: 'all',
      },
    ],
    logConfiguration: {
      logDriver: 'awslogs',
      options: {
        'awslogs-group': 'kayoko-sd',
        'awslogs-region': configs.REGION,
        'awslogs-create-group': 'true',
      },
    },
  },
}

const volumes: Type.Volume[] = [
  {
    name: 'data',
    hostPath: '/sd/data',
  },
  {
    name: 'output',
    hostPath: '/sd/output',
  },
]

export function create() {
  const defaultTask = new aws.ecs.TaskDefinition('kayoko-task-sd', {
    family: 'kayoko-sd',
    memory: `${1024 * 10}`,
    // networkMode: 'bridge',
    networkMode: 'awsvpc',

    runtimePlatform: {
      operatingSystemFamily: 'LINUX',
      cpuArchitecture: 'X86_64',
    },
    containerDefinitions: JSON.stringify(Object.values(containers)),
    volumes,
  })

  return defaultTask
}
