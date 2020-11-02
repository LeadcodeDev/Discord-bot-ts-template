import { Roles } from 'App/utils'
import { Message } from 'discord.js'

type CommandType = {
	name: string
	description: string
	tag: string
	alias?: Array<string>
	roles?: Array<Roles>
	run(msg: Message, args: Array<string>): void
}

export default CommandType
