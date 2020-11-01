import { GuildMember, Message } from 'discord.js'
import Robot from '..'
import { MiddlewareInterface } from '../interfaces'
import { Middleware } from '../interfaces/decorators'
import { CommandType, LoggerType } from '../types'
import { Env, Logger } from '../utils'

@Middleware({ name: 'Guard' })
class Guard extends MiddlewareInterface {
	public async run(message: Message): Promise<void> {
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
						await Logger.send(LoggerType.INFO, `${author.tag} execute command (${name})`)
					} else {
						await sender.lastMessage!.reply("Vous n'avez pas l'autorisation d'excuter cette commande.")
						await Logger.send(LoggerType.ERROR, `${author.tag} not allowed to execute command (${command.name})`)
					}
				} else {
					await command.run(message, args.slice(1))
					await Logger.send(LoggerType.INFO, `${author.tag} execute command (${name})`)
				}
			})
	}

	private hasRoles(roles: Array<string>, sender: GuildMember): boolean {
		let bool: boolean = false
		if (sender.roles.cache.size > 1) {
			roles.map((role) => sender.roles.cache.has(role) && (bool = true))
		}
		return bool
	}

	public async protect(message: Message): Promise<void> {
		await this.emit(this.name!, message)
	}
}

export default new Guard()
