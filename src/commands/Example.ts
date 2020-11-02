import { Roles } from 'App/Utils'
import { Command } from 'Core/decorators'
import { CommandInterface } from 'Core/interfaces'
import { Message } from 'discord.js'

@Command({ name: 'Example command', description: 'Example of command', tag: 'example', roles: [Roles.EXAMPLE] })
class Example implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		console.log('Hello world :)')
	}
}

export default new Example()
