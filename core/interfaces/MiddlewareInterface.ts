import { EventEmitter } from 'events'

export default class MiddlewareInterface extends EventEmitter {
	readonly name?: string
	public async run(params?: any): Promise<void> {}
	execute(params?: any): void {}
}
