import { Message } from 'discord.js'

export default interface ICommand {
	readonly name: string
	readonly describe: string
	readonly tag: string
	readonly roles?: Array<number>
	run(message: Message, args: string[]): any
}
