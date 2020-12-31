import { Roles } from 'App/Utils'
import { Command } from '@discord-ts-app/core/build/Decorators/Class'
import { CommandInterface } from '@discord-ts-app/core/build/Interfaces'
import { Message } from 'discord.js'

@Command({ name: 'Example command', description: 'Example of command', tag: 'example', roles: [Roles.EXAMPLE] })
export default class Example implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		console.log('Hello world :)')
	}
}
