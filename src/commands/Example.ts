import { Message } from 'discord.js'
import { CommandInterface } from '../../core/interfaces'
import { Command } from '../../core/decorators'
import { Roles } from '../utils'

@Command({ name: 'Example command', description: 'Example of command', tag: 'example', roles: [Roles.EXAMPLE] })
class Example implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		console.log('Hello world :)')
	}
}

export default new Example()
