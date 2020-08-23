import { Command } from '../interfaces'
import { Message } from 'discord.js'
import { members, administrateur } from '../configurations/roles'

class Example implements Command {
	public name = 'Hello world'
	public describe = 'Make your first command example'
	public tag = 'hello'
	public roles = [members, administrateur]

	run(message: Message, args: string[]) {
		console.log('Hello world :)')
	}
}

export default new Example()
