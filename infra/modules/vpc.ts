import * as aws from '@pulumi/aws'

import { REGION, AZ } from '../configs'

const cidr = ['10.0.0.0/20', '10.0.16.0/20', '10.0.32.0/20']

export const vpc = new aws.ec2.Vpc('kayoko-vpc', {
  cidrBlock: '10.0.0.0/16',
  enableDnsSupport: true,
  enableDnsHostnames: true,
})

export const subnets: aws.ec2.Subnet[] = AZ.map(
  (az, i) =>
    new aws.ec2.Subnet(`kayoko-az-${az}`, {
      vpcId: vpc.id,
      cidrBlock: cidr[i],
      availabilityZone: `${REGION}${az}`,
    })
)

export const gw = new aws.ec2.InternetGateway('gw', {
  vpcId: vpc.id,
})

export const rt = new aws.ec2.DefaultRouteTable('kayoko-default-route-table', {
  defaultRouteTableId: vpc.defaultRouteTableId,
  routes: [
    {
      cidrBlock: '0.0.0.0/0',
      gatewayId: gw.id,
    },
  ],
})
