import { User } from 'discord.js'

type CommandReceived = {
	commandName: string
	commandRoles: Array<string>
	sender: User
	allowed: boolean
}

export default CommandReceived
