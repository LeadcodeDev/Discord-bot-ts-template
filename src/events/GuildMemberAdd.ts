import { Message } from 'discord.js'
import { Event } from '../interfaces'
import { Guard } from '../middlewares'

class GuildMemberAdd implements Event {
	public name: string = 'guildMemberAdd'

	async run() {
		// Your code here
	}
}

export default new GuildMemberAdd()
