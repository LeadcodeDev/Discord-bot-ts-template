import { Client } from 'discord.js'
import { Command, Event } from './interfaces'
import { Middleware } from './interfaces'
import { Logger } from './utils'

export default class Bot {
	private commands: Array<Command> = []
	private events: Array<Event> = []
	private middlewares: Array<Middleware> = []
	private client: Client
	private token: string

	constructor(client: Client, token: string) {
		this.client = client
		this.token = token
	}

	/**
	 * Create new command and add this to the bot
	 * @param { Command } command
	 * @returns { bot }
	 */
	public registerCommand(command: Command): Bot {
		this.commands.push(command)
		return this
	}

	/**
	 * Create new command array and add this to the bot
	 * @param { Commands } commands
	 * @returns { bot }
	 */
	public registerCommands(commands: Array<Command>): Bot {
		commands.forEach((command) => {
			this.commands.push(command)
		})
		return this
	}

	/**
	 * Create new event and add this to the bot
	 * @param { Event } event
	 * @returns { bot }
	 */
	public registerEvent(event: Event): Bot {
		this.events.push(event)
		return this
	}

	/**
	 * Create new event array and add this to the bot
	 * @param { Events } event
	 * @returns { bot }
	 */
	public registerEvents(events: Array<Event>): Bot {
		events.forEach((event) => {
			this.events.push(event)
		})
		return this
	}

	/**
	 * Setup middlewares
	 * @param { Middleware } middleware
	 * @returns { bot }
	 */
	public middleware(middleware: Array<Middleware>): Bot {
		this.middlewares = middleware
		return this
	}

	/**
	 * Call command list
	 * @returns { Command }
	 */
	public getCommands(): Array<Command> {
		return this.commands
	}

	public logger(): Bot {
		Logger.run()
		return this
	}

	async initialize(): Promise<void> {
		this.events.forEach(async ({ name, run }) => {
			await this.client.on(name, run)
		})

		this.middlewares.forEach(async (middleware) => {
			await middleware.run()
		})
		await this.client.login(this.token)
	}
}
