import { Event } from 'Core/decorators'
import { EventInterface } from 'Core/interfaces'
import { EventList, LoggerType } from 'Core/types'
import { Env } from 'Core/utils'
import Logger from 'Core/utils/Logger'

@Event({ type: EventList.READY })
class ReadyEvent implements EventInterface {
	public async run() {
		await Logger.send(LoggerType.INFO, `${Env.get('CLIENT_NAME')} is ready`)
	}
}
export default new ReadyEvent()
