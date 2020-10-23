import { Command } from '../interfaces'
import { Message } from 'discord.js'
import { Roles, useChannel } from '../utils'

class Test implements Command {
	public name = 'Command example'
	public describe = 'Describe your command'
	public tag = 'test'
	public alias = []
	public roles = []

	run(message: Message, args: string[]) {
		const { channels } = useChannel()
		const usemessage = channels()

		console.log(usemessage)
	}
}

export default new Test()
