---
description: >-
  This Discord Bot integrates a command prompt allowing the creation of orders
  or events within your project.
---

# Commands

## Create your own command

```typescript
node ace make:command foo
```

One file will be created and another will be altered.

{% code title="App/src/commands/Foo.ts" %}
```typescript
import { Message } from 'discord.js'
import { CommandInterface } from '../interfaces'
import { Command } from '../interfaces/decorators'
import { Roles } from '../utils'

@Command({ name: 'Example command', description: 'Example of command', tag: 'foo', roles: [Roles.EXAMPLE] })
class Foo implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		// Your code here
	}
}

export default new Foo()
```
{% endcode %}

{% hint style="info" %}
Your newly created file is automatically added to the index.ts of the App/src/commands document.
{% endhint %}

{% code title="App/src/commands/index.ts" %}
```typescript
import Help from './Help'
import Example from './Example'
import Foo from './Foo'

export { Example, Help, Foo }
```
{% endcode %}

Now that your order has been created, you will need to add it to the instance of your bot

{% code title="App/src/index.ts" %}
```typescript
import Bot from '../core/Bot'
import { Example, Help, Foo } from './commands' // 👈 Import your command here
import { Ready , Message} from './events'
import Guard from './middlewares/Guard'

const Robot = new Bot()

Robot
    .registerCommands([Example, Help, Foo]) // 👈 Add your command here
    .registerEvents([Ready, Message])
    .middleware([Guard])
    .initialize()
    
export default Robot
```
{% endcode %}

