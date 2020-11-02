import { EventInterface } from '../interfaces'
import { Guard } from '../../core/Middlewares'
import { EventList } from '../types'
import { Event } from './../interfaces/decorators'
import { Message } from 'discord.js'

@Event({ type: EventList.MESSAGE })
class ReadyEvent implements EventInterface {
	public async run(message: Message) {
		await Guard.protect(message)
	}
}

export default new ReadyEvent()
