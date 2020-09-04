import { Command } from '../interfaces'
import { Message } from 'discord.js'
import { Roles } from '../utils'

class Chatonf implements Command {
	public name = 'Command example'
	public describe = 'Make your first command example'
	public tag = 'example'
	public roles = [Roles.ADMINISTRATEUR, Roles.TEST]

	run(message: Message, args: string[]) {
		console.log('Hello world :)')
	}
}

export default new Chatonf()
