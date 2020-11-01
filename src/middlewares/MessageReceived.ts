import { Middleware } from '../interfaces/decorators'
import { MiddlewareInterface } from '../interfaces'
import { CommandReceived, Hooks } from '../types'

@Middleware({ lifecycle: Hooks.COMMAND_RECEIVED })
class MessageReceived extends MiddlewareInterface {
	public async run({ commandName, commandRoles, sender, allowed }: CommandReceived) {
		console.log('Received command', { commandName, commandRoles, sender, allowed })
	}
}

export default new MessageReceived()
