import { EventInterface } from '../interfaces'
import { EventList, LoggerType } from '../types'
import { Logger, Env } from '../utils'

import { Event } from './../interfaces/decorators'

@Event({ type: EventList.READY })
class ReadyEvent implements EventInterface {
	public async run() {
		await Logger.send(LoggerType.INFO, `${Env.get('CLIENT_NAME')} is ready`)
	}
}
export default new ReadyEvent()
