import Bot from './Bot'
import { Logger, Env } from '../src/utils'
export default class Ignitor {
	private bot: Bot

	constructor(bot: Bot) {
		this.bot = bot
		this.run()
	}

	async run() {
		await this.setupEvents()
		await this.setupMiddlewares()
		await Logger.run()
		await this.bot.getClient().login(Env.get('CLIENT_TOKEN'))
	}

	private setupEvents() {
		this.bot.getEvents().forEach(async ({ name, run }) => {
			await this.bot.getClient().on(name, run)
		})
	}

	private setupMiddlewares() {
		this.bot.getMiddlewares().forEach(async (middleware) => {
			await middleware.run()
		})
	}
}
