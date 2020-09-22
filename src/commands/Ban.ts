import { Command } from '../interfaces'
import { Message } from 'discord.js'
import { Roles } from '../utils'

class Ban implements Command {
	public name = 'Command example'
	public describe = 'Describe your command'
	public tag = 'ban'
	public roles = []

	run(message: Message, args: string[]) {
		// Your code here
	}
}

export default new Ban()
