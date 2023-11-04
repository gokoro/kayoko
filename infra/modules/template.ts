import * as aws from '@pulumi/aws'
import { Input, Output } from '@pulumi/pulumi'

import { vpc } from './vpc'
import { securityGroups } from './loadbalancer'

// For activation of GPU for all containers by default
// sed -i 's/\(OPTIONS="--default-ulimit nofile=[^"]*\)"/\1 --default-runtime nvidia"/' /etc/sysconfig/docker
const SED = Buffer.from(
  'c2VkIC1pICdzL1woT1BUSU9OUz0iLS1kZWZhdWx0LXVsaW1pdCBub2ZpbGU9W14iXSpcKSIvXDEgLS1kZWZhdWx0LXJ1bnRpbWUgbnZpZGlhIi8nIC9ldGMvc3lzY29uZmlnL2RvY2tlcg',
  'base64'
).toString()

const ami = aws.ec2.getAmi({
  mostRecent: true,
  filters: [
    {
      name: 'name',
      values: ['amzn2-ami-ecs-gpu-hvm-2.*.*-x86_64-ebs'],
    },
    {
      name: 'virtualization-type',
      values: ['hvm'],
    },
  ],
  owners: ['amazon'],
})

const instanceAssumeRolePolicy = aws.iam.getPolicyDocument({
  statements: [
    {
      actions: ['sts:AssumeRole'],
      principals: [
        {
          type: 'Service',
          identifiers: ['ec2.amazonaws.com'],
        },
      ],
    },
  ],
})

const ecsInstancePolicy = aws.iam.getPolicy({
  name: 'AmazonEC2ContainerServiceforEC2Role',
})

const ecsInstanceRole = new aws.iam.Role('kayoko-ecs-instance-role', {
  assumeRolePolicy: instanceAssumeRolePolicy.then(
    (instanceAssumeRolePolicy) => instanceAssumeRolePolicy.json
  ),
  inlinePolicies: [
    {
      name: ecsInstancePolicy.then((p) => p.name),
      policy: ecsInstancePolicy.then((p) => p.policy),
    },
  ],
})

const ecsInstanceProfile = new aws.iam.InstanceProfile(
  'kayoko-ecs-instance-profile',
  {
    role: ecsInstanceRole.name,
  }
)

const securityGroupForContainerInstance = new aws.ec2.SecurityGroup(
  'kayoko-security-group-container',
  {
    vpcId: vpc.id,
    ingress: [
      {
        fromPort: 0,
        toPort: 0,
        protocol: '-1',
        cidrBlocks: ['0.0.0.0/0'],
        ipv6CidrBlocks: ['::/0'],
        securityGroups: [securityGroups.id],
      },
    ],
    egress: [
      {
        fromPort: 0,
        toPort: 0,
        protocol: '-1',
        cidrBlocks: ['0.0.0.0/0'],
        ipv6CidrBlocks: ['::/0'],
      },
    ],
  }
)

export function create({
  clusterName,
  keyName,
}: {
  clusterName: string
  keyName: Input<string>
}) {
  // const rawUserData = `
  //   #!/bin/bash
  //   echo "ECS_CLUSTER=${clusterName}" >> /etc/ecs/ecs.config
  //   echo "ECS_ENGINE_TASK_CLEANUP_WAIT_DURATION=10m" >> /etc/ecs/ecs.config
  //   echo "ECS_IMAGE_CLEANUP_INTERVAL=10m" >> /etc/ecs/ecs.config
  //   (grep -q ^OPTIONS=\"--default-runtime /etc/sysconfig/docker && echo '/etc/sysconfig/docker needs no changes') || (sed -i 's/^OPTIONS="/OPTIONS="--default-runtime nvidia /' /etc/sysconfig/docker && echo '/etc/sysconfig/docker updated to have nvidia runtime as default' && systemctl restart docker && echo 'Restarted docker')
  // `
  const rawUserData = `
    #!/bin/bash
    echo "ECS_CLUSTER=${clusterName}" >> /etc/ecs/ecs.config
    echo "ECS_ENGINE_TASK_CLEANUP_WAIT_DURATION=10m" >> /etc/ecs/ecs.config
    echo "ECS_IMAGE_CLEANUP_INTERVAL=10m" >> /etc/ecs/ecs.config
  `
  const userData = Buffer.from(rawUserData + SED, 'utf-8').toString('base64')

  const launchTemplate = new aws.ec2.LaunchTemplate('kayoko-launch-template', {
    imageId: ami.then((image) => image.id),
    vpcSecurityGroupIds: [securityGroupForContainerInstance.id],
    keyName,
    userData,
    blockDeviceMappings: [
      {
        deviceName: '/dev/xvda',
        ebs: {
          volumeSize: 80,
        },
      },
    ],
    iamInstanceProfile: {
      arn: ecsInstanceProfile.arn,
    },
  })

  return { launchTemplate }
}
