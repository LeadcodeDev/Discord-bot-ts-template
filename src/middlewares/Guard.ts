import { Middleware, Command, Types } from '../interfaces'
import { GuildMember, Message } from 'discord.js'
import { prefix } from '../configurations/core'
import Robot from '..'
import { Logger } from '../utils'

class Guard extends Middleware {
	public async run() {
		this.on('commandReceived', (message: Message) => {
			const { content, member, author } = message

			const sender: GuildMember = member!
			const args: string[] = content.split(' ')
			const commandName = args[0].replace(prefix, '')

			Robot.getCommands()
				.filter((command) => command.tag === commandName)
				.forEach(async (command) => {
					const { roles, name } = command
					await message.delete()
					if (this.hasRoles(roles, sender)) {
						await command.run(message, args.slice(1))
						await Logger.emit('logger', Types.INFO, `${author.tag} execute command (${name})`, false)
					} else {
						await sender.lastMessage!.reply("Vous n'avez pas l'autorisation d'excuter cette commande.")
						await Logger.emit('logger', Types.ERROR, `${author.tag} not allowed to execute command (${command.name})`)
					}
				})
		})
	}

	private hasRoles(roles: Array<string>, sender: GuildMember): boolean {
		let bool: boolean = false
		if (sender.roles.cache.size > 1) {
			roles.map((role) => sender.roles.cache.has(role) && (bool = true))
		}
		return bool
	}
}

export default new Guard()
