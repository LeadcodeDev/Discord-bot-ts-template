import { Message } from 'discord.js'
import { EventInterface } from '../interfaces'
import { Guard } from '../middlewares'
import { EventType } from '../utils'
import { Event } from './../interfaces/decorators'

@Event(EventType.MESSAGE)
class ReadyEvent implements EventInterface {
	public async run(message: Message) {
		await Guard.protect(message)
	}
}

export default new ReadyEvent()
