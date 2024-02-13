import * as aws from '@pulumi/aws'

import * as configs from '../../configs'

import type * as Type from './types'

const containers: Record<string, Type.Container> = {
  sd: {
    name: 'preinstall-sd',
    // image: 'ghcr.io/thirdscam/sd-webui-docker-a1111:v1.3.0',
    image:
      '798545013573.dkr.ecr.ap-northeast-2.amazonaws.com/sd-docker-download:latest',
    essential: true,
    mountPoints: [
      {
        containerPath: '/data',
        sourceVolume: 'data',
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
]

export function create() {
  const defaultTask = new aws.ecs.TaskDefinition('preinstall-sd-task', {
    family: 'preinstall-sd',
    memory: '512',
    networkMode: 'bridge',

    runtimePlatform: {
      operatingSystemFamily: 'LINUX',
      cpuArchitecture: 'X86_64',
    },
    containerDefinitions: JSON.stringify(Object.values(containers)),
    volumes,
  })

  return defaultTask
}
