import Ignitor from 'Core/Ignitor'
import { CommandInterface, EventInterface, MiddlewareInterface } from 'Core/interfaces'
import { CommandType, EventType } from 'Core/types'
import { Client } from 'discord.js'

export default class Bot {
	private commands: Array<CommandType> = []
	private events: Array<EventInterface> = []
	private middlewares: Array<MiddlewareInterface> = []
	private client: Client

	constructor() {
		this.client = new Client()
	}

	/**
	 * Create new command and add this to the bot
	 * @param { Command } command
	 * @returns { bot }
	 */
	public registerCommand(command: CommandType): Bot {
		this.commands.push(command)
		return this
	}

	/**
	 * Create new command array and add this to the bot
	 * @param { Commands } commands
	 * @returns { bot }
	 */
	public registerCommands(commands: Array<CommandInterface>): Bot {
		commands.forEach((command: any) => this.commands.push(command))
		return this
	}

	/**
	 * Create new event and add this to the bot
	 * @param { Event } event
	 * @returns { bot }
	 */
	public registerEvent(event: EventType): Bot {
		this.events.push(event)
		return this
	}

	/**
	 * Create new event array and add this to the bot
	 * @param { Events } event
	 * @returns { bot }
	 */
	public registerEvents(events: Array<EventInterface>): Bot {
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
	public middleware(middleware: Array<MiddlewareInterface>): Bot {
		this.middlewares = middleware
		return this
	}

	/**
	 * Call command list
	 * @returns { Command }
	 */
	public getCommands(): Array<CommandType> {
		return this.commands
	}

	/**
	 * Call instance of client
	 * @returns { Client }
	 */
	public getClient(): Client {
		return this.client
	}

	/**
	 * Call events list
	 * @returns { Event }
	 */
	public getEvents(): Array<EventInterface> {
		return this.events
	}

	/**
	 * Call middleware list
	 * @returns { Middleware }
	 */
	public getMiddlewares(): Array<MiddlewareInterface> {
		return this.middlewares
	}

	async initialize(): Promise<void> {
		await new Ignitor(this)
	}
}
