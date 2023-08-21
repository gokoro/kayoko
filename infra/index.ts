import { readFileSync } from 'fs'
import * as aws from '@pulumi/aws'

const ami = aws.ec2.getAmi({
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

const group = new aws.ec2.SecurityGroup('kayoko-secgrp', {
  ingress: [
    { protocol: 'tcp', fromPort: 22, toPort: 22, cidrBlocks: ['0.0.0.0/0'] },
    { protocol: 'tcp', fromPort: 80, toPort: 80, cidrBlocks: ['0.0.0.0/0'] },
    { protocol: 'tcp', fromPort: 443, toPort: 443, cidrBlocks: ['0.0.0.0/0'] },
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
})

const keyName = 'kayoko_ed25519'
const keyPair = aws.ec2.getKeyPair({ keyName })

const userData = readFileSync('./scripts/pulumi.sh', 'utf-8')

const kayoko = new aws.ec2.Instance('kayoko', {
  ami: ami.then((i) => i.id),
  instanceType: 'g4dn.xlarge',
  vpcSecurityGroupIds: [group.id],
  keyName: keyPair.then((key) => key.keyName ?? keyName),
  userData,

  rootBlockDevice: { volumeSize: 30 },

  // @ts-ignore
  userDataReplaceOnChange: true,
})

// const volume = new aws.ebs.Volume('kayoko', {
//   availabilityZone: aws.APSouthEast2Region,
//   size: 40,
// })

// const attach = new aws.ec2.VolumeAttachment(
//   'kayoko',
//   {
//     deviceName: '/dev/sda1',
//     instanceId: kayoko.id,
//     volumeId: volume.id,
//   },
//   { dependsOn: volume }
// )

export const instanceId = kayoko.id
export const instanceAdress = kayoko.publicIp
