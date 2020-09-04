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
import { Command } from '../interfaces'
import { Message } from 'discord.js'
import { Roles } from '../utils'

class Foo implements Command {

  public name = 'command name'
  public describe = 'describe your command'
  public tag = 'prefix to call your command'
  public roles = [Roles.ADMINISTRATUR, Roles.MEMBER] // 👈 you can define your roles directly via their ids

  run(message: Message, args: string[]) {
	// Write here your code
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

Commands are built with class which implements the `ICommand` interface giving you some parameters:

| params   | describes                             | types         | required |
| -------- | ------------------------------------- | ------------- | -------- |
| name     | Name of your command                  | string        | true     |
| describe | Describe your command                 | string        | true     |
| tag      | Used to call the command              | string        | true     |
| roles    | Roles required to execute the command | array[string] | true    |
