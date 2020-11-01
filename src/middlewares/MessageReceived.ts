import { Middleware } from '../interfaces/decorators'
import { MiddlewareInterface } from '../interfaces'
import { MessageReceived, Hooks } from '../types'

@Middleware({ lifecycle: Hooks.MESSAGE_RECEIVED })
class test extends MiddlewareInterface {
	public async run({ message }: MessageReceived) {
		console.log('Received', message)
	}
}

export default new test()
