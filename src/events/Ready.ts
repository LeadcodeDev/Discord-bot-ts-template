import { EventInterface, Types } from '../interfaces'
import { Logger, Env, EventType } from '../utils'
import { Event } from './../interfaces/decorators'

@Event(EventType.GUILD_MEMBER_ADD)
class ReadyEvent implements EventInterface {
	run() {
		Logger.send(Types.INFO, `${Env.get('CLIENT_NAME')} is ready`)
	}
}

export default new ReadyEvent()
