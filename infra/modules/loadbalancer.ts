import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'

import { vpc, subnets } from './vpc'

const vpcId = vpc.id

export const securityGroups = new aws.ec2.SecurityGroup(
  'kayoko-lb-security-group',
  {
    vpcId,
    ingress: [
      // { protocol: 'tcp', fromPort: 80, toPort: 80, cidrBlocks: ['0.0.0.0/0'] },
      // {
      //   protocol: 'tcp',
      //   fromPort: 443,
      //   toPort: 443,
      //   cidrBlocks: ['0.0.0.0/0'],
      // },
      {
        protocol: 'tcp',
        fromPort: 80,
        toPort: 80,
        cidrBlocks: [vpc.cidrBlock],
      },
      {
        protocol: 'tcp',
        fromPort: 443,
        toPort: 443,
        cidrBlocks: [vpc.cidrBlock],
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

export const lb = new aws.lb.LoadBalancer('kayoko-loadbalancer', {
  internal: true,
  loadBalancerType: 'application',
  securityGroups: [securityGroups.id],
  subnets: subnets.map((subnet) => subnet.id),
})
