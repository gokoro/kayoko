import * as aws from '@pulumi/aws'
import * as pulumi from '@pulumi/pulumi'

import * as configs from '../configs'
import { vpc, subnets } from './vpc'
import { lb } from './loadbalancer'

const ubuntu = aws.ec2.getAmi({
  mostRecent: true,
  filters: [
    {
      name: 'name',
      values: ['ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*'],
    },
    {
      name: 'virtualization-type',
      values: ['hvm'],
    },
  ],
  owners: ['amazon'],
})

const allowVpcSecurityGroup = new aws.ec2.SecurityGroup('allowTls', {
  vpcId: vpc.id,
  ingress: [],
  egress: [
    {
      fromPort: 0,
      toPort: 0,
      protocol: '-1',
      cidrBlocks: ['0.0.0.0/0'],
      ipv6CidrBlocks: ['::/0'],
    },
  ],
})

const cloudInit = pulumi
  .all([configs.TAILSCALE_AUTH_KEY, ...subnets.map((s) => s.cidrBlock)])
  .apply(
    ([authKey, ...cidr]) => `
    #cloud-config
    runcmd:
      - ['sh', '-c', 'curl -fsSL https://tailscale.com/install.sh | sh']
      - ['sh', '-c', "echo 'net.ipv4.ip_forward = 1' | sudo tee -a /etc/sysctl.d/99-tailscale.conf && echo 'net.ipv6.conf.all.forwarding = 1' | sudo tee -a /etc/sysctl.d/99-tailscale.conf && sudo sysctl -p /etc/sysctl.d/99-tailscale.conf" ]
      - ['tailscale', 'up', '--authkey=${authKey}']
      - ['tailscale', 'set', '--ssh']
      - ['tailscale', 'set', '--advertise-exit-node']
      - ['tailscale', 'set', '--advertise-routes=${cidr.join(',')}']
  `
  )

const tailscale = new aws.ec2.Instance('tailscale', {
  ami: ubuntu.then((ubuntu) => ubuntu.id),
  instanceType: 't3.small',
  subnetId: subnets[1].id,
  vpcSecurityGroupIds: [allowVpcSecurityGroup.id],
  userData: cloudInit,
  userDataReplaceOnChange: true,
  associatePublicIpAddress: true,
})
