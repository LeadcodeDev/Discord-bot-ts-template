import { Message, MessageEmbed } from 'discord.js'
import Bot from '../'
import { Command } from '../interfaces'
import { Env } from '../utils'

class Help implements Command {
	public name = 'Help'
	public describe = 'Oui'
	public tag = 'help'
	public roles = []

	async run(message: Message, args: string[]) {
		const embed = this.makeEmbed(message)
		await message.reply(embed)
	}

	private makeEmbed(message: Message): MessageEmbed {
		let embed = new MessageEmbed()
		Bot.getCommands().forEach((command) => {
			const { name, describe, tag, roles } = command
			embed
				.setDescription(`Here are the commands available for the bot ${name}`)
				.addField(`${name} (${Env.get('CLIENT_PREFIX')}${tag})`, `\n${describe}\n__Required roles :__ ${this.fetchRoles(message, roles).join(', ')}`, true)
				.setTitle('Commands list')
				.setFooter(Bot.getClient().user!.username, Bot.getClient().user!.displayAvatarURL())
				.setThumbnail(Bot.getClient().user!.displayAvatarURL())
		})
		return embed
	}

	private fetchRoles(message: Message, roles: Array<string>): any {
		if (roles.length != 0) {
			let element: Array<string> = []
			roles.forEach((role) => {
				console.log('role', role)
				const r = message.guild!.roles.cache.get(role)!.name
				element.push(r.charAt(0).toUpperCase() + r.slice(1))
			})
			return element
		} else {
			return ['none']
		}
	}
}

export default new Help()
