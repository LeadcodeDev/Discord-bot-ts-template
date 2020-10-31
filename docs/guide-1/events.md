# Events

## Creating your own event is very easy

Go to the events folder of your application

```text
cd App/src/events
```

Then create a new file, name it whatever you want or use following command in your CLI : `node ace make:event event_name`

This will give you a name similar to this `FooEvent`

## Your first event

Copy and paste the following code :

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

We create a class implementing the `IEvent` interface. This interface requires us to add the `name` parameter, it corresponds to the name of your event.

To see all of the events available, please visit the [official discord.js documentation](https://discord.js.org/#/docs/main/stable/general/welcome) In the `run` function you will be able to write the logic of your event

Finally, we export the class and instantiate it and we add event in tow files. **NOTE :** If you have using command generator, you don't need to add manualy your command in the `App/events/index.ts`.

`→ App/events/index.ts`

```typescript
import Foo from './FooEvent'

export { Foo }
```

`→ App/index.ts`

```typescript
import { Foo } from './events'

Robot
  .registerEvent(Foo) // register only one event
  .registerEvents([Foo]) // register many events
  .initialize()
```

