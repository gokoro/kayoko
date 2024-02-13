import * as aws from '@pulumi/aws'
import { vpc } from './vpc'

export const serviceDiscoveryNamespace =
  new aws.servicediscovery.PrivateDnsNamespace('service-discovery-namespace', {
    vpc: vpc.id,
  })

export const serviceDiscoveryService = new aws.servicediscovery.Service(
  'service-discovery-service',
  {
    name: 'sd',
    dnsConfig: {
      namespaceId: serviceDiscoveryNamespace.id,
      dnsRecords: [
        {
          ttl: 10,
          type: 'A',
        },
      ],
      routingPolicy: 'MULTIVALUE',
    },
  }
)
