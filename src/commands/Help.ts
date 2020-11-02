import Bot from 'App/index'
import { Roles } from 'App/utils'
import { Command } from 'Core/decorators'
import { CommandInterface } from 'Core/interfaces'
import { Env } from 'Core/utils'
import { Message, MessageEmbed } from 'discord.js'

@Command({ name: 'Help', description: 'List all registered commands', tag: 'help', roles: [Roles.EXAMPLE] })
class Help implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		await msg.reply(this.makeEmbed(msg))
	}

	private makeEmbed(message: Message): MessageEmbed {
		let embed = new MessageEmbed()
		Bot.getCommands().forEach((command: any) => {
			const { name, description, tag, roles } = command
			embed
				.setDescription(`Here are the commands available for the bot ${name}`)
				.addField(`${name} (${Env.get('CLIENT_PREFIX')}${tag})`, `\n${description}\n__Required roles :__ ${this.fetchRoles(message, roles).join(', ')}`, true)
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
