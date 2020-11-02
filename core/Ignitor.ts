import Bot from 'Core/Bot'
import Lifecycle from 'Core/middlewares/Lifecycle'
import { Hooks } from 'Core/types'
import { Env } from 'Core/utils'

export default class Ignitor {
	private bot: Bot

	constructor(bot: Bot) {
		this.bot = bot
		this.run()
	}

	async run() {
		this.bot.getEvents().forEach(async ({ name, run }: any) => await this.bot.getClient().on(name, run))
		this.bot.getMiddlewares().forEach(async (middleware: any) => await Lifecycle.on(middleware.lifecycle, (params?: any) => middleware.run(params)))
		Lifecycle.emit(Hooks.BEFORE_START)
		await this.bot.getClient().login(Env.get('CLIENT_TOKEN'))
		Lifecycle.emit(Hooks.AFTER_START)
	}
}
