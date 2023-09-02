# `Infra`

This package is using [Pulumi](https://github.com/pulumi/pulumi) for deployment to AWS.

## Prerequisite

Config in `Pulumi.yaml`

```yaml
config:
  aws:region: <string>
  infra:client-discord-bot-token: <string>
  infra:client-discord-default-guild-id: <string>
  infra:client-voice-output-path: <string>
```
