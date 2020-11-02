import Logger from '../../core/utils/Logger'
import { EventInterface } from '../../core/interfaces'
import { EventList, LoggerType } from '../../core/types'
import { Env } from '../../core/utils'
import { Event } from '../decorators'

@Event({ type: EventList.READY })
class ReadyEvent implements EventInterface {
	public async run() {
		await Logger.send(LoggerType.INFO, `${Env.get('CLIENT_NAME')} is ready`)
	}
}
export default new ReadyEvent()
