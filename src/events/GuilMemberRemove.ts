import { Message } from 'discord.js'
import { Event } from '../interfaces'
import { Guard } from '../middlewares'

class GuilMemberRemove implements Event {
	public name: string = 'guilMemberRemove'

	async run() {
		// Your code here
	}
}

export default new GuilMemberRemove()
