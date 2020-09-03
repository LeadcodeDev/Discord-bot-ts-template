import { Middleware, Types } from '../interfaces'
import { GuildMember, Message } from 'discord.js'
import Robot from '..'
import { Logger, Env } from '../utils'

class Guard extends Middleware {
	public async run() {
		this.on('commandReceived', (message: Message) => {
			const { content, member, author } = message

			const sender: GuildMember = member!
			const args: string[] = content.split(' ')
			const commandName = args[0].replace(Env.get('CLIENT_PREFIX'), '')

			Robot.getCommands()
				.filter((command) => command.tag === commandName)
				.forEach(async (command) => {
					const { roles, name } = command
					await message.delete()
					if (roles.length != 0) {
						if (this.hasRoles(roles, sender)) {
							await command.run(message, args.slice(1))
							await Logger.emit('logger', Types.INFO, `${author.tag} execute command (${name})`, false)
						} else {
							await sender.lastMessage!.reply("Vous n'avez pas l'autorisation d'excuter cette commande.")
							await Logger.emit('logger', Types.ERROR, `${author.tag} not allowed to execute command (${command.name})`)
						}
					} else {
						await command.run(message, args.slice(1))
						await Logger.emit('logger', Types.INFO, `${author.tag} execute command (${name})`, false)
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
