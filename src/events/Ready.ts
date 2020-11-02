import Events from 'Core/api/events'
import { Event } from 'Core/decorators'
import { EventInterface } from 'Core/interfaces'
import { LoggerType } from 'Core/types'
import { Env, Logger } from 'Core/utils'

@Event({ type: Events.READY })
class ReadyEvent implements EventInterface {
	public async run() {
		await Logger.send(LoggerType.INFO, `${Env.get('CLIENT_NAME')} is ready`)
	}
}
export default new ReadyEvent()
