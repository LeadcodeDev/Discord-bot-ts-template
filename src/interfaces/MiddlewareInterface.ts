import { EventEmitter } from 'events'
import { Message } from 'discord.js'

export default class MiddlewareInterface extends EventEmitter {
	readonly name?: string
	register(): void {}
	public async run(params?: any): Promise<void> {}
	execute(params?: any): void {}
}
