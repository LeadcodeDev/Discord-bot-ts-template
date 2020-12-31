import { Event, Events } from '@discord-ts-app/core/build/Decorators/Class'
import { EventInterface } from '@discord-ts-app/core/build/Interfaces'
import { Guard } from '@discord-ts-app/core/build/Middlewares'
import { Message } from 'discord.js'

@Event({ type: Events.MESSAGE })
export default class ReadyEvent implements EventInterface {
	public async run(message: Message) {
		await Guard.protect(message)
	}
}
