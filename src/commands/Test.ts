import { Command } from '../interfaces'
import { Message } from 'discord.js'
import { Roles } from '../utils'

class Test implements Command {
	public name = 'Command example'
	public describe = 'Describe your command'
	public tag = 'test'
	public alias = []
	public roles = [Roles.ADMINISTRATEUR]

	run(message: Message, args: string[]) {
		// Your code here
	}
}

export default new Test()
