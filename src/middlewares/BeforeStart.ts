import { Middleware } from '../interfaces/decorators'
import { MiddlewareInterface } from '../interfaces'
import { Hooks } from '../types'

@Middleware({ lifecycle: Hooks.BEFORE_START })
class BeforeStart extends MiddlewareInterface {
	public async run() {
		console.log('Hook : before start')
	}
}

export default new BeforeStart()
