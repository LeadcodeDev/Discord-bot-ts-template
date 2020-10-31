---
description: Creating your own command is very easy
---

# Commands

You can create your command from our CLI

```text
node ace make:command foo
```

## Your first command

Copy and paste the following code :

```typescript
import { Message } from 'discord.js'
import { CommandInterface } from '../interfaces'
import { Command } from '../interfaces/decorators'
import { Roles } from '../utils'

@Command({ name: 'Foo', description: 'Describe your command', tag: 'foo', alias: ['f'], roles: [Roles.FOO] })
class Foo implements CommandInterface {
    public async run(msg: Message, args: string[]): Promise<void> {
        // Your code here
    }
}

export default new Foo()
```

In the `run` function you will be able to write the logic of your event Finally, we export the class and instantiate it and we add command in tow files.

{% hint style="warning" %}
**NOTE :** Don't forget to add your command in your bot instance
{% endhint %}

{% code title="App/src/commands/index.ts" %}
```typescript
import Foo from './Foo'

export { Foo }
```
{% endcode %}

{% code title="App/src/index.ts" %}
```typescript
import { Foo } from './commands'

Robot
  .registerCommand(Foo) // register only one command
  .registerCommands([Foo]) // register many commands
  .initialize()
```
{% endcode %}

