import Hooks from '@discord-ts-app/core/build/enums/hooks'
import { Middleware } from '@discord-ts-app/core/build/decorators/class'
import { MiddlewareInterface } from '@discord-ts-app/core/build/interfaces'

@Middleware({ lifecycle: Hooks.EXAMPLE })
export default class Example extends MiddlewareInterface {
	public async run(): Promise<void> {
		// Your code here
	}
}
