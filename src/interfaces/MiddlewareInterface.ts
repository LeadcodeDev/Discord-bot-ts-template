import { EventEmitter } from 'events'
import { Message } from 'discord.js'

export default class MiddlewareInterface extends EventEmitter {
	readonly name?: string
	register(): void {}
	run(message: Message): void {}
	execute(message: Message): void {}
}
