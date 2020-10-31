---
description: >-
  This Discord Bot integrates a command prompt allowing the creation of orders
  or events within your project.
---

# Commands

## Create your own command

Becoming a super hero is a fairly straight forward process:

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



