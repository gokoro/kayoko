import * as aws from '@pulumi/aws'
import * as cf from '@pulumi/cloudflare'

import type { Args } from '.'

import * as configs from '../../configs'
import { create as createTask } from '../tasks/sd'
import { lb } from '../loadbalancer'

const task = createTask()

export function register(args: Args) {
  const zone = cf.getZone({
    zoneId: configs.SD_ZONEID,
  })
  const rootHostname = zone.then((z) => z.name)
  const subdomain = 'sd'
  const hostname = rootHostname.then((n) => `${subdomain}.${n}`)

  const cert = new aws.acm.Certificate('cert', {
    domainName: hostname,
    validationMethod: 'DNS',
    keyAlgorithm: 'RSA_2048',
  })

  const targetGroup = new aws.lb.TargetGroup('kayoko-targetGroup-http', {
    targetType: 'instance',
    port: 80,
    protocol: 'HTTP',
    vpcId: args.vpcId,
  })

  const service = new aws.ecs.Service(`kayoko-service-sd`, {
    name: 'kayoko-sd',
    cluster: args.clusterId,

    serviceConnectConfiguration: {
      enabled: true,
      namespace: args.namespaceArn,
    },
    taskDefinition: task.arn,
    desiredCount: 1,
    forceNewDeployment: true,
    loadBalancers: [
      {
        containerName: 'sd',
        containerPort: 7890,
        targetGroupArn: targetGroup.arn,
      },
    ],
  })

  const sdListner = new aws.lb.Listener('kayoko-sd-listner', {
    loadBalancerArn: lb.arn,
    port: 80,
    protocol: 'HTTP',

    defaultActions: [
      {
        type: 'redirect',
        redirect: { statusCode: 'HTTP_301', port: '443', protocol: 'HTTPS' },
      },
    ],
  })

  const sdListnerTls = new aws.lb.Listener('kayoko-sd-listner-tls', {
    loadBalancerArn: lb.arn,
    port: 443,
    protocol: 'HTTPS',
    certificateArn: cert.arn,

    defaultActions: [
      {
        type: 'forward',
        targetGroupArn: targetGroup.arn,
      },
    ],
  })

  const listnerRule = new aws.lb.ListenerRule('kayoko-sd-listner-rule', {
    listenerArn: sdListnerTls.arn,
    priority: 100,
    actions: [
      {
        type: 'forward',
        targetGroupArn: targetGroup.arn,
      },
    ],
    conditions: [
      {
        pathPattern: {
          values: ['/'],
        },
      },
      {
        hostHeader: {
          values: [hostname],
        },
      },
    ],
  })

  const record = new cf.Record('kayoko-sd', {
    zoneId: configs.SD_ZONEID,
    allowOverwrite: true,
    name: subdomain,
    type: 'CNAME',
    value: lb.dnsName,
    ttl: 60,
  })

  // For Certificate Validation
  const validationRecordOption = cert.domainValidationOptions[0]

  const recordForCert = new cf.Record('kayoko-sd-record-cert', {
    zoneId: configs.SD_ZONEID,
    allowOverwrite: true,
    name: validationRecordOption.resourceRecordName,
    type: validationRecordOption.resourceRecordType,
    value: validationRecordOption.resourceRecordValue,
  })

  return service
}
