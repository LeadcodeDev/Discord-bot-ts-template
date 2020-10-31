# Environment

## Configure your bot is very easy

Go to the configurations folder of your application

### Environment file

You can configure your secret token and the prefor of your bot

{% code title="App/.env" %}
```yaml
CLIENT_TOKEN=your token
CLIENT_PREFIX=your prefix
CLIENT_NAME=name of your bot
CLIENT_DESCRIPTION=description of your bot

DEFAULT_TIMEZONE=your timezone
LOGGER=true # or false
```
{% endcode %}

### Roles.ts

{% code title="App/src/utils/Roles.ts" %}
```typescript
enum Roles {
  // ROLE_NAME = '602194770084888650',
}

export default Roles
```
{% endcode %}

{% hint style="info" %}
To find roles id, please write in your discord chat `@\target_role`
{% endhint %}

### Channels

{% code title="App/src/utils/Channels.ts" %}
```typescript
enum Channels {
  // CHANNEL_NAME = '602194770084888650',
}

export default Channels
```
{% endcode %}

{% hint style="info" %}
To find channel id, please right click in our channel \(see more [here](https://support.discord.com/hc/fr/articles/206346498-O%C3%B9-trouver-l-ID-de-mon-compte-utilisateur-serveur-message-)\)
{% endhint %}

