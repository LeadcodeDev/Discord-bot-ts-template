import { Middleware, Command } from '../interfaces'
import { GuildMember, Message } from 'discord.js'
import { prefix } from '../configurations/core'
import Robot from '..'

class Guard extends Middleware {
	public async run() {
		this.on('commandReceived', (message: Message) => {
			const { content, member } = message

			const sender: GuildMember = member!
			const args: string[] = content.split(' ')
			const commandName = args[0].replace(prefix, '')

			Robot.getCommands()
				.filter((command) => command.tag === commandName)
				.forEach(async (command) => {
					await message.delete()
					this.hasRoles(command.roles, sender)
						? command.run(message, args.slice(1))
						: await sender.lastMessage!.reply("Vous n'avez pas l'autorisation d'excuter cette commande.")
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
