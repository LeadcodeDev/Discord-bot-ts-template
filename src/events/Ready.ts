import { EventInterface } from '../interfaces'
import { LoggerType } from '../types'
import { Logger, Env, EventType } from '../utils'
import { Event } from './../interfaces/decorators'

@Event(EventType.READY)
class ReadyEvent implements EventInterface {
	public async run() {
		Logger.send(LoggerType.INFO, `${Env.get('CLIENT_NAME')} is ready`)
	}
}
export default new ReadyEvent()
