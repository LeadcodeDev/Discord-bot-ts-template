---
description: You can configure your project in App/.env
---

# Environment

## Environement configurations

{% code title=".env" %}
```text
CLIENT_TOKEN=your token
CLIENT_PREFIX=your prefix
CLIENT_NAME=name of your bot
CLIENT_DESCRIPTION=description of your bot

DEFAULT_TIMEZONE=your timezone #
LOGGER=true # or false
```
{% endcode %}

### Roles configurations

```typescript
enum Roles {
  ROLE_MEMBER = '601915708594454538',
  ROLE_ADMINISTRATEUR = '602194770084888650'
}

export default Roles
```

### Channels configurations

```typescript
enum Channels {
  CHANNEL_WELCOME = '583050048766476355'
  CHANNEL_GENERAL = '756945714939953242'
}

export default Channels
```

