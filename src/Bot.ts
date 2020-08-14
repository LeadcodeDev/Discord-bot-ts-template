import { Client, Message } from 'discord.js'
import { ICommand, IEvent } from './interfaces'
import { prefix } from './configurations/core'

export default class Bot {
	public commands: ICommand[] = []
	private events: IEvent[] = []

	private client: Client
	private token: string

	constructor(client: Client, token: string) {
		this.client = client
		this.token = token
	}

	/**
	 * Create new command and add this to the bot
	 * @param { ICommand } command
	 * @returns { bot }
	 */
	public registerCommand(command: ICommand): Bot {
		this.commands.push(command)
		return this
	}

	/**
	 * Create new event and add this to the bot
	 * @param { IEvent } event
	 * @returns { bot }
	 */
	public registerEvent(event: IEvent): Bot {
		this.events.push(event)
		return this
	}

	async initialize() {
		this.events.forEach(async ({ name, run }) => {
			await this.client.on(name, run)
		})
		this.client.on('message', (message: Message) => {
			const parts = message.content.split(' ')
			const commandName = parts[0].replace(prefix, '')
			const commandUsed: any = this.commands.find(
				(c) => c.tag === commandName
			)
			if (commandUsed === undefined) return false
			return commandUsed.run(message, parts.slice(1))
		})
		await this.client.login(this.token)
	}
}
