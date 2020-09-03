import { Message } from 'discord.js'
import { Event } from '../interfaces'
import { Guard } from '../middlewares'

class ReadyEvent implements Event {
	public name: string = 'message'

	async run(message: Message) {
		await Guard.emit('commandReceived', message)
	}
}

export default new ReadyEvent()
