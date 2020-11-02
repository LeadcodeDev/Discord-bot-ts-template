import Hooks from 'Core/api/hooks'
import { Middleware } from 'Core/decorators'
import { MiddlewareInterface } from 'Core/interfaces'

@Middleware({ lifecycle: Hooks.EXAMPLE })
class Example extends MiddlewareInterface {
	public async run(): Promise<void> {
		// Your code here
	}
}

export default new Example()