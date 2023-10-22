import * as aws from '@pulumi/aws'

import type * as Type from './types'

const containers: Record<string, Type.Container> = {
  rvc: {
    name: 'rvc',
    image: 'ghcr.io/gokoro/kayoko-rvc:latest',
    essential: true,
    healthCheck: {
      command: [
        'CMD',
        'curl --request GET --url http://localhost:5000/health || exit 1',
      ],
    },
    portMappings: [
      {
        name: 'http',
        containerPort: 8000,
        appProtocol: 'http',
      },
    ],
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

const volumes: Type.Volume[] = [
  {
    name: 'output',
    hostPath: '/app/output',
  },
]

export function create() {
  const defaultTask = new aws.ecs.TaskDefinition('kayoko-task-rvc', {
    family: 'kayoko-rvc',
    memory: '4096',
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
