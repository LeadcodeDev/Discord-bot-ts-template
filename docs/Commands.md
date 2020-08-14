# Commands

#### Creating your own command is very easy

Go to the commands folder of your application

```
cd App/src/commands
```

Then create a new file, name it whatever you want.

#### Your first command

Copy and paste the following code :

```ts
import { ICommand } from '../interfaces'
import { Message } from 'discord.js'
import { firstRole, secondRole } from '../configurations/roles'
class Example implements ICommand {
	public name = 'command name'
	public describe = 'describe your command'
	public tag = 'prefix to call your command'
	public roles = [firstRole, secondRole]
	run(message: Message, args: string[]) {
		// Write here your code
	}
}

export default new Example()
```
In the `run` function you will be able to write the logic of your event
Finally, we export the class and instantiate it.

The commands are built with class which implements the `ICommand` interface giving you some parameters:

| params   | describes                             | types         | required |
| -------- | ------------------------------------- | ------------- | -------- |
| name     | Name of your command                  | string        | true     |
| describe | Describe your command                 | string        | true     |
| tag      | Used to call the command              | string        | true     |
| roles    | Roles required to execute the command | array[number] | false    |