import { EventEmitter } from 'events'

export default class Middleware extends EventEmitter {
	register(): void {}
	run(): void {}
}
