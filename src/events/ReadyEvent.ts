import { Event, Types } from '../interfaces'
import { Logger } from '../utils'
import { name } from '../configurations/core'

class ReadyEvent implements Event {
	public name: string = 'ready'

	run() {
		Logger.emit('logger', Types.INFO, `${name} is ready`)
	}
}

export default new ReadyEvent()
