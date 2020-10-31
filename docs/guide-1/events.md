---
description: Creating your own event is very easy
---

# Events

You can create your event from our CLI

```text
node ace make:event guildMemberAdd
```

{% hint style="info" %}
**NOTE :** Please select an valid event to naming your event \(see [event list](../references/events.md)\)
{% endhint %}

## Your first event

```typescript
import { EventInterface } from '../interfaces'
import { LoggerType, EventList } from '../types'
import { Logger, Env } from '../utils'
import { Event } from './../interfaces/decorators'

@Event(EventList.READY) 👈 // Select your event here
class ReadyEvent implements EventInterface {
    public async run() {
        // Your code here
    }
}
export default new ReadyEvent()
```

{% hint style="info" %}
You can find discord events list in [here](../references/events.md)
{% endhint %}

We create a class implementing the `EventInterface`.

In the `run` function you will be able to write the logic of your event

Finally, we export the class and instantiate it and we add event in tow files. **NOTE :** If you have using command generator, you don't need to add manualy your command in the `App/events/index.ts`.

{% hint style="warning" %}
**NOTE :** Don't forget to add your event in your bot instance
{% endhint %}

{% code title="App/src/events/index.ts" %}
```typescript
import GuildMemberAdd from './GuildMemberAdd'

export { GuildMemberAdd}
```
{% endcode %}

{% code title="App/index.ts" %}
```typescript
import { GuildMemberAdd } from './events'

Robot
  .registerEvent(GuildMemberAdd) // register only one event
  .registerEvents([GuildMemberAdd ]) // register many events
  .initialize()
```
{% endcode %}

