import { Middleware } from '../interfaces/decorators'
import { MiddlewareInterface } from '../interfaces'
import { Hooks } from '../types'

@Middleware({ lifecycle: Hooks.AFTER_START })
class AfterStart extends MiddlewareInterface {
	public async run() {
		console.log('Hook : after start')
	}
}

export default new AfterStart()
