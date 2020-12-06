import Events from '@discord-ts-app/core/build/enums/events'
import { Event } from '@discord-ts-app/core/build/decorators/class'
import { EventInterface } from '@discord-ts-app/core/build/interfaces'
import { Logger, State } from '@discord-ts-app/core/build/utils/Logger'
import Env from '@discord-ts-app/core/build/utils/Env'

@Event({ type: Events.READY })
export default class ReadyEvent implements EventInterface {
	public async run() {
		await Logger.send(State.INFO, `${Env.get('CLIENT_NAME')} is ready`)
	}
}
