import { Client, Message } from 'discord.js'
import { ICommand, IEvent } from './interfaces'

export default class Bot {
	private commands: ICommand[] = []
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

	public getCommands() {
		return this.commands
	}

	async initialize() {
		this.events.forEach(async ({ name, run }) => {
			await this.client.on(name, run)
		})
		await this.client.login(this.token)
	}
}
