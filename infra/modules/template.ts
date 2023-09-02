import * as aws from '@pulumi/aws'
import { Input, Output } from '@pulumi/pulumi'

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
      values: ['amzn2-ami-ecs-gpu-hvm-2.0.*-x86_64-ebs'],
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

export function create({
  clusterName,
  keyName,
  securityGroupId,
}: {
  clusterName: string
  keyName: Input<string>
  securityGroupId: Output<string>
}) {
  const rawUserData = `
    #!/bin/bash
    echo "ECS_CLUSTER=${clusterName}" >> /etc/ecs/ecs.config
  `
  const userData = Buffer.from(rawUserData + SED, 'utf-8').toString('base64')

  const launchTemplate = new aws.ec2.LaunchTemplate('kayoko-launch-template', {
    imageId: ami.then((image) => image.id),
    vpcSecurityGroupIds: [securityGroupId],
    keyName,
    userData,
    iamInstanceProfile: {
      arn: ecsInstanceProfile.arn,
    },
  })

  return { launchTemplate }
}
