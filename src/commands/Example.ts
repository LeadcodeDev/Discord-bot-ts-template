import { Roles } from 'App/Utils'
import { Command } from 'Core/decorators'
import { CommandInterface } from 'Core/interfaces'
import { Message } from 'discord.js'

@Command({ name: 'Example command', description: 'Example of command', tag: 'example', roles: [Roles.EXAMPLE] })
export default class Example implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		console.log('Hello world :)')
	}
}
