import { Middleware } from '../interfaces'
import { GuildMember, Message } from 'discord.js'
import Robot from '..'
import { Logger, Env } from '../utils'
import { CommandType, LoggerType } from '../types'

class Guard extends Middleware {
	public async run() {
		this.on('commandReceived', (message: Message) => {
			const { content, member, author } = message

			const sender: GuildMember = member!
			const args: string[] = content.split(' ')
			const commandName = args[0].replace(Env.get('CLIENT_PREFIX'), '')

			Robot.getCommands()
				.filter((command: CommandType) => command.tag === commandName || command.alias?.includes(commandName))
				.forEach(async (command: CommandType) => {
					const { roles, name } = command
					await message.delete()
					if (roles?.length != 0) {
						if (this.hasRoles(roles!, sender)) {
							await command.run(message, args.slice(1))
							await Logger.emit('logger', LoggerType.INFO, `${author.tag} execute command (${name})`, false)
						} else {
							await sender.lastMessage!.reply("Vous n'avez pas l'autorisation d'excuter cette commande.")
							await Logger.emit('logger', LoggerType.ERROR, `${author.tag} not allowed to execute command (${command.name})`)
						}
					} else {
						await command.run(message, args.slice(1))
						await Logger.emit('logger', LoggerType.INFO, `${author.tag} execute command (${name})`, false)
					}
				})
		})
	}

	public async protect(message: Message) {
		await this.emit('commandReceived', message)
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
