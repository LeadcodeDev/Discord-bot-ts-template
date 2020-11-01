import { Env, Logger } from '../src/utils'
import Bot from './Bot'
import { Message } from 'discord.js'
import { LoggerType } from '../src/types'

export default class Ignitor {
	private bot: Bot

	constructor(bot: Bot) {
		this.bot = bot
		this.run()
	}

	async run() {
		this.bot.getEvents().forEach(async ({ name, run }: any) => await this.bot.getClient().on(name, run))
		this.bot.getMiddlewares().forEach(async (middleware: any) => await middleware.on(middleware.name, (message: Message) => middleware.run(message)))
		await Logger.send(LoggerType.INFO, 'Application is logged')
		await this.bot.getClient().login(Env.get('CLIENT_TOKEN'))
	}
}
