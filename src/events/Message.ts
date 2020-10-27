import { Message } from 'discord.js'
import { EventInterface } from '../interfaces'
import { Guard } from '../middlewares'

class ReadyEvent implements EventInterface {
	public name: string = 'message'

	async run(message: Message) {
		await Guard.emit('commandReceived', message)
	}
}

export default new ReadyEvent()
