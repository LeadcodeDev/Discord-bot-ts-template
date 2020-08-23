# Events

#### Creating your own event is very easy

Go to the events folder of your application

```
cd App/src/events
```

Then create a new file, name it whatever you want. We recommend that you use the `Event` suffix to properly dissociate the commands from the rest of your application.

This will give you a name similar to this `FooEvent`

#### Your first event

Copy and paste the following code :

```ts
import { Event } from '../interfaces'

class ReadyEvent implements Event {
	
  public name = 'ready'

  run() {
	// Your code here
  }
}

export default new ReadyEvent()
```

We create a class implementing the `IEvent` interface. This interface requires us to add the `name` parameter, it corresponds to the name of your event.

To see all of the events available, please visit the [official discord.js documentation](https://discord.js.org/#/docs/main/stable/general/welcome)
In the `run` function you will be able to write the logic of your event

Finally, we export the class and instantiate it and we add event in tow files.

`→ App/events/index.ts`

```ts
import Foo from './FooEvent'

export { Foo }
```

`→ App/index.ts`

```ts
import { Foo } from './events'

Robot
  .registerEvent(Foo)
  .initialize()
```

Events are built with class which implements the `IEvent` interface giving you some parameters:

| params | describes          | types  | required |
| ------ | ------------------ | ------ | -------- |
| name   | Name of your event | string | true     |
