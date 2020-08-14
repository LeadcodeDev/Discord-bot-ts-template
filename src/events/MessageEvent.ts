import { Message } from 'discord.js'
import Robot from '..'
import { prefix } from '../configurations/core'
import { ICommand, IEvent } from '../interfaces'

class ReadyEvent implements IEvent {
	public name: string = 'message'

	run(message: Message) {
		const args: string[] = message.content.split(' ')
		const commandName = args[0].replace(prefix, '')
		const commandUsed: ICommand[] = Robot.getCommands().filter(
			(command) => command.tag === commandName
		)

		if (commandUsed[0] === undefined) return false
		return commandUsed[0].run(message, args.slice(1))
	}
}

export default new ReadyEvent()
