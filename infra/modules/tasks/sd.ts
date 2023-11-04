import * as aws from '@pulumi/aws'

import * as configs from '../../configs'

import type * as Type from './types'

const containers: Record<string, Type.Container> = {
  sd: {
    name: 'sd',
    image: 'ghcr.io/thirdscam/sd-webui-docker-a1111:latest',
    essential: true,
    portMappings: [
      {
        name: 'http',
        containerPort: 7890,
        hostPort: 0,
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
      {
        containerPath: '/apt/models',
        sourceVolume: 'models',
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
          '--listen --port 7890 --enable-insecure-extension-access --api --theme=dark --no-half-vae --opt-sdp-no-mem-attention',
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
  {
    name: 'models',
    hostPath: '/sd/models',
  },
]

export function create() {
  const defaultTask = new aws.ecs.TaskDefinition('kayoko-task-sd', {
    family: 'kayoko-sd',
    memory: '6144',
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
