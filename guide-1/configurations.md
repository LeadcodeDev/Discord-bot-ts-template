# Configurations

## Configure your bot is very easy

Go to the configurations folder of your application

```text
cd App/.env
```

You have 3 files:

### .env

You can configure your secret token and the prefor of your bot

```text
CLIENT_TOKEN=your token
CLIENT_PREFIX=your prefix
CLIENT_NAME=name of your bot
CLIENT_DESCRIPTION=description of your bot

DEFAULT_TIMEZONE=your timezone #
LOGGER=true # or false
```

### Roles.ts

You can configure set your guild roles here WARN : To find roles id, please write in your discord chat '\' before your @target\_role

```typescript
enum Roles {
  // ROLE_NAME = '602194770084888650',
}

export default Roles
```

### Channels.ts

You can configure set your guild channels here WARN : To find roles id, please rught click in the channels bar and select 'copy'

```typescript
enum Channels {
  // CHANNEL_NAME = '602194770084888650',
}

export default Channels
```

