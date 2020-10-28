import { Message } from 'discord.js'
import { EventInterface } from '../interfaces'
import { Guard } from '../middlewares'
import { EventList } from '../types'
import { Event } from './../interfaces/decorators'

@Event(EventList.MESSAGE)
class ReadyEvent implements EventInterface {
	public async run(message: Message) {
		await Guard.protect(message)
	}
}

export default new ReadyEvent()
