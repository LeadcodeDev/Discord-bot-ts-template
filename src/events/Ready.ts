import Events from 'Core/api/events'
import { Event } from 'Core/decorators'
import { EventInterface } from 'Core/interfaces'
import LoggerList from 'Core/api/logger'
import { Env, Logger } from 'Core/utils'

@Event({ type: Events.READY })
export default class ReadyEvent implements EventInterface {
	public async run() {
		await Logger.send(LoggerList.INFO, `${Env.get('CLIENT_NAME')} is ready`)
	}
}
