# Commands

#### Creating your own command is very easy

Go to the commands folder of your application

```
cd App/src/commands
```

Then create a new file, name it whatever you want or use following command in your CLI :
`node ace make:command command_name`

#### Your first command

Copy and paste the following code :

```ts
import { Message } from 'discord.js'
import { CommandInterface } from '../interfaces'
import { Command } from '../interfaces/decorators'
import { Roles } from '../utils'

@Command({ name: 'Foo', description: 'Describe your command', tag: 'foo', roles: [Roles.FOO] })
class Foo implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		// Your code here
	}
}

export default new Foo()
```

In the `run` function you will be able to write the logic of your event
Finally, we export the class and instantiate it and we add command in tow files.

**NOTE :** If you have using command generator, you don't need to add manualy your command in the `App/commands/index.ts`.

`→ App/commands/index.ts`

```ts
import Foo from './Foo'

export { Foo }
```

`→ App/index.ts`

```ts
import { Foo } from './commands'

Robot
  .registerCommand(Foo) // register only one command
  .registerCommands([Foo]) // register many commands
  .initialize()
```
