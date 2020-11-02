import { EventInterface } from '../../core/interfaces'
import { Guard } from '../../core/middlewares'
import { EventList } from '../../core/types'
import { Event } from '../../core/decorators'
import { Message } from 'discord.js'

@Event({ type: EventList.MESSAGE })
class ReadyEvent implements EventInterface {
	public async run(message: Message) {
		await Guard.protect(message)
	}
}

export default new ReadyEvent()
