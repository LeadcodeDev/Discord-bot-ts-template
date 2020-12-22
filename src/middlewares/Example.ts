import { Middleware, Hooks } from '@discord-ts-app/core/build/Decorators/Class'
import { MiddlewareInterface } from '@discord-ts-app/core/build/Interfaces'

@Middleware({ lifecycle: Hooks.EXAMPLE })
export default class Example extends MiddlewareInterface {
	public async run(): Promise<void> {
		// Your code here
	}
}
