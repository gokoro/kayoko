import * as aws from '@pulumi/aws'

import { create as createTemplate } from './modules/template'
import { registerAll as registerServices } from './modules/services'

import { vpc, subnets } from './modules/vpc'
import { lb } from './modules/loadbalancer'

// Specify name of cluster explicitly, due to the `output` type of Pulumi.
// The name of cluster should be included in the Launch Template,
// for EC2 instance to discover the proper cluster.
// This should be AVOIDED, but it's hard to find another solution.
// Please let me know if you have another method.

const clusterName = 'kayoko-ecs-cluster'
const keyName = 'kayoko_ed25519'

const namespace = new aws.servicediscovery.HttpNamespace('kayoko-area', {
  name: 'kayoko-area',
})

const cluster = new aws.ecs.Cluster('kayoko-ecs-cluster', {
  name: clusterName,
  serviceConnectDefaults: {
    namespace: namespace.arn,
  },
  settings: [
    {
      name: 'containerInsights',
      value: 'enabled',
    },
  ],
})

const subnetIds = subnets.map((subnet) => subnet.id)

const { launchTemplate } = createTemplate({
  clusterName,
  keyName,
})

// const [task] = createTasks()

const ag = new aws.autoscaling.Group('kayoko-ag', {
  vpcZoneIdentifiers: subnets.map((subnet) => subnet.id),

  desiredCapacity: 1,
  maxSize: 1,
  minSize: 1,

  mixedInstancesPolicy: {
    launchTemplate: {
      launchTemplateSpecification: {
        launchTemplateId: launchTemplate.id,
      },
      overrides: [
        { instanceType: 'g4dn.xlarge' },
        { instanceType: 'g3s.xlarge' },
        { instanceType: 'g4dn.2xlarge' },
      ],
    },
    instancesDistribution: {
      /*
        On-Demand: 0% 
        Spot Instance: 100%
      */
      onDemandPercentageAboveBaseCapacity: 0,
      spotAllocationStrategy: 'capacity-optimized',
    },
  },
})

const cp = new aws.ecs.CapacityProvider('kayoko-cluster-capacity-provider', {
  autoScalingGroupProvider: {
    autoScalingGroupArn: ag.arn,
  },
})

const clusterCapacityProviders = new aws.ecs.ClusterCapacityProviders(
  'kayoko-clusterCapacityProviders',
  {
    clusterName: cluster.name,
    capacityProviders: [cp.name],
  }
)

registerServices({
  vpcId: vpc.id,
  clusterId: cluster.id,
  namespaceArn: namespace.arn,
  // targetGroup: targetGroupHttp.arn,
  subnets: subnetIds,
})

export { clusterName }
