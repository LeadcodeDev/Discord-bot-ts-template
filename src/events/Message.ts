import Events from 'Core/api/events'
import { Event } from 'Core/decorators'
import { EventInterface } from 'Core/interfaces'
import { Guard } from 'Core/middlewares'
import { Message } from 'discord.js'

@Event({ type: Events.MESSAGE })
class ReadyEvent implements EventInterface {
	public async run(message: Message) {
		await Guard.protect(message)
	}
}

export default new ReadyEvent()
