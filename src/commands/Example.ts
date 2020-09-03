import { Command } from '../interfaces'
import { Message } from 'discord.js'
import { Roles } from '../utils'

class Example implements Command {
	public name = 'Hello world'
	public describe = 'Make your first command example'
	public tag = 'hello'
	public roles = [Roles.ADMINISTRATUR, Roles.MEMBER]

	run(message: Message, args: string[]) {
		console.log('Hello world :)')
	}
}

export default new Example()
