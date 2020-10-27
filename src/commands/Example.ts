import { Command } from '../interfaces'
import { Message } from 'discord.js'
import { Roles } from '../utils'

class Example implements Command {
	public name = 'Command example'
	public describe = 'Make your first command example'
	public tag = 'example'
	public alias = ['ex']
	public roles = []

	run(msg: Message, args: string[]) {
		console.log('Hello world :)')
	}
}

export default new Example()
