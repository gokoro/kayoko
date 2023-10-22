import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'

export type Container =
  awsx.types.input.ecs.TaskDefinitionContainerDefinitionArgs
export type Volume = aws.types.input.ecs.TaskDefinitionVolume
