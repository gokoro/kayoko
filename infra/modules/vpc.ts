import * as aws from '@pulumi/aws'

import { REGION, AZ } from '../configs'

const cidr = ['10.0.0.0/20', '10.0.16.0/20', '10.0.32.0/20']

export function create() {
  const vpc = new aws.ec2.Vpc('kayoko-vpc', {
    cidrBlock: '10.0.0.0/16',
    enableDnsSupport: true,
    enableDnsHostnames: true,
  })

  const subnets: aws.ec2.Subnet[] = AZ.map(
    (az, i) =>
      new aws.ec2.Subnet(`kayoko-az-${az}`, {
        vpcId: vpc.id,
        cidrBlock: cidr[i],
        availabilityZone: `${REGION}${az}`,
        mapPublicIpOnLaunch: true,
      })
  )

  const defaultSecurityGroup = new aws.ec2.DefaultSecurityGroup(
    'kayoko-sg-default',
    {
      vpcId: vpc.id,

      ingress: [
        {
          protocol: 'tcp',
          fromPort: 22,
          toPort: 22,
          cidrBlocks: ['0.0.0.0/0'],
        },
        // { protocol: 'tcp', fromPort: 80, toPort: 80, cidrBlocks: ['0.0.0.0/0'] },
        // { protocol: 'tcp', fromPort: 443, toPort: 443, cidrBlocks: ['0.0.0.0/0'] },
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

  const gw = new aws.ec2.InternetGateway('gw', {
    vpcId: vpc.id,
  })

  const rt = new aws.ec2.DefaultRouteTable('kayoko-default-route-table', {
    defaultRouteTableId: vpc.defaultRouteTableId,
    routes: [
      {
        cidrBlock: '0.0.0.0/0',
        gatewayId: gw.id,
      },
    ],
  })

  return { vpc, subnets, defaultSecurityGroup }
}
