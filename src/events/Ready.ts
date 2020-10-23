import { Event, Types } from '../interfaces'
import { Logger, Env } from '../utils'

class ReadyEvent implements Event {
	public name: string = 'ready'

	run() {
		Logger.send(Types.INFO, `${Env.get('CLIENT_NAME')} is ready`)
	}
}

export default new ReadyEvent()
