import { Command } from '../interfaces'
import { Message } from 'discord.js'
import { Roles } from '../utils'

class Test implements Command {
	public name = 'Command example'
	public describe = 'Describe your command'
	public tag = 'test'
	public roles = []

	run(message: Message, args: string[]) {
		console.log('Hello world :)')
	}
}

export default new Test()
