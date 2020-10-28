import { Message } from 'discord.js'

export default interface CommandInterface {
	run(msg: Message, args: Array<string>): void
}
