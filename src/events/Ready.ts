import { Event, Events } from '@discord-ts-app/core/build/Decorators/Class'
import { EventInterface } from '@discord-ts-app/core/build/Interfaces'
import { Logger, State } from '@discord-ts-app/core/build/Utils/Logger'
import Env from '@discord-ts-app/core/build/Utils/Env'

@Event({ type: Events.READY })
export default class ReadyEvent implements EventInterface {
	public async run() {
		await Logger.send(State.INFO, `${Env.get('CLIENT_NAME')} is ready`)
	}
}
