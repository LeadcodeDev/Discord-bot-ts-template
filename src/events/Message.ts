import Events from '@discord-ts-app/core/build/enums/events'
import { Event } from '@discord-ts-app/core/build/decorators'
import { EventInterface } from '@discord-ts-app/core/build/interfaces'
import { Guard } from '@discord-ts-app/core/build/Middlewares'
import { Message } from 'discord.js'

@Event({ type: Events.MESSAGE })
export default class ReadyEvent implements EventInterface {
	public async run(message: Message) {
		await Guard.protect(message)
	}
}
