import * as awsx from '@pulumi/awsx'
import * as aws from '@pulumi/aws'

import * as config from '../configs'

type Container = awsx.types.input.ecs.TaskDefinitionContainerDefinitionArgs
type Volume = aws.types.input.ecs.TaskDefinitionVolume

const containers: Record<string, Container> = {
  client: {
    name: 'client',
    image: 'ghcr.io/gokoro/kayoko-client:latest',

    portMappings: [
      {
        name: 'http',
        containerPort: 3000,
        hostPort: 3000,
        appProtocol: 'http',
      },
    ],
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
  rvc: {
    name: 'rvc',
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
  // const defaultTask = new awsx.ecs.EC2TaskDefinition('kayoko-default-task', {
  //   // const defaultTask = new awsx.ecs.EC2TaskDefinition('kayoko-default-task', {
  //   memory: '4096',
  //   networkMode: 'bridge',

  //   // networkMode: 'host',
  //   // networkMode: 'awsvpc',

  //   runtimePlatform: {
  //     operatingSystemFamily: 'LINUX',
  //     cpuArchitecture: 'X86_64',
  //   },
  //   taskRole: {
  //     args: {
  //       inlinePolicies: [
  //         {
  //           name: pollyPolicy.then((p) => p.name),
  //           policy: pollyPolicy.then((p) => p.policy),
  //         },
  //       ],
  //     },
  //   },
  //   containers,
  //   volumes,
  // })
  const defaultTask = new aws.ecs.TaskDefinition('kayoko-default-task', {
    family: 'kayoko-main',
    // const defaultTask = new awsx.ecs.EC2TaskDefinition('kayoko-default-task', {
    memory: '4096',
    networkMode: 'bridge',

    // networkMode: 'host',
    // networkMode: 'awsvpc',

    runtimePlatform: {
      operatingSystemFamily: 'LINUX',
      cpuArchitecture: 'X86_64',
    },
    taskRoleArn: role.arn,
    // taskRole: {
    //   args: {
    //     inlinePolicies: [
    //       {
    //         name: pollyPolicy.then((p) => p.name),
    //         policy: pollyPolicy.then((p) => p.policy),
    //       },
    //     ],
    //   },
    // },
    // containers,
    containerDefinitions: JSON.stringify(Object.values(containers)),
    volumes,
  })

  return [defaultTask]
}
