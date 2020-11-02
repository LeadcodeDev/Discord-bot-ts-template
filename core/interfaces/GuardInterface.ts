import { Message } from 'discord.js'

export default interface GuardInterface {
	protect(message: Message): Promise<void>
}
