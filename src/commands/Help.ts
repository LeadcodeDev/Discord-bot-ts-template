import { Roles } from 'App/Utils'
import { Command } from '@discord-ts-app/core/build/Decorators/Class'
import { useClient, useCommands } from '@discord-ts-app/core/build/Hooks'
import { CommandInterface } from '@discord-ts-app/core/build/Interfaces'
import Env from '@discord-ts-app/core/build/Utils/Env'
import { Message, MessageEmbed } from 'discord.js'

@Command({ name: 'Help', description: 'List all registered commands', tag: 'help', roles: [Roles.EXAMPLE] })
export default class Help implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		await msg.reply(this.makeEmbed(msg))
	}

	private makeEmbed(message: Message): MessageEmbed {
		const commands = useCommands()
		const { user } = useClient()
		const embed = new MessageEmbed({
			title: 'Commands list',
			description: `Here are the commands available for the bot ${user!.username}`,
			footer: { text: user!.username, iconURL: user!.displayAvatarURL() },
			thumbnail: { url: user!.displayAvatarURL() },
		})

		commands.forEach((command: any) => {
			embed.addField(`${command.name} (${Env.get('CLIENT_PREFIX')}${command.tag})`, `\n${command.description}\n__Required roles :__ ${this.fetchRoles(message, command.roles).join(', ')}`)
		})
		return embed
	}

	private fetchRoles(message: Message, roles: Array<string>): any {
		if (roles.length != 0) {
			let element: Array<string> = []
			roles.forEach((role) => {
				const r = message.guild!.roles.cache.get(role)!.name
				element.push(r.charAt(0).toUpperCase() + r.slice(1))
			})
			return element
		}
		return []
	}
}
