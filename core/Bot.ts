import { Client } from 'discord.js'
import { Command, Event } from '../src/interfaces'
import { Middleware } from '../src/interfaces'
import Ignitor from './Ignitor'

export default class Bot {
	private commands: Array<Command> = []
	private events: Array<Event> = []
	private middlewares: Array<Middleware> = []
	private client: Client

	constructor() {
		this.client = new Client()
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
	public getEvents(): Array<Event> {
		return this.events
	}

	/**
	 * Call middleware list
	 * @returns { Middleware }
	 */
	public getMiddlewares(): Array<Middleware> {
		return this.middlewares
	}

	async initialize(): Promise<void> {
		await new Ignitor(this)
	}
}
