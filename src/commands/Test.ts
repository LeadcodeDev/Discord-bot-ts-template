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
		const { channels, channel } = useChannel()
		const getChannels = channels(true)
		const getChannel = channel()

		console.log('getChannels', getChannels)
		console.log('getChannel', getChannel)
	}
}

export default new Test()
