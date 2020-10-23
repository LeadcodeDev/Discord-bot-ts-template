import { Middleware, Command, Types } from '../interfaces'
import chalk from 'chalk'
import moment from 'moment'
import Env from './Env'

class Logger extends Middleware {
	constructor() {
		super()
		moment.locale(Env.get('DEFAULT_TIMEZONE'))
	}
	public async run() {
		this.on('logger', (type: Types, message: string, prod: boolean = true): void => {
			if (Env.get('LOGGER')) {
				if (process.env.NODE_ENV?.trim() == 'production' && prod) {
					this.sendMessage(type, message)
				} else if (process.env.NODE_ENV?.trim() == 'development') {
					this.sendMessage(type, message)
				}
			}
		})
	}

	public async send(type: Types, message: string) {
		await this.emit('logger', type, message)
	}

	private sendMessage(type: Types, message: string): void {
		console.log(`${chalk.rgb(190, 190, 190)(this.date())} ${this.chooseColors(type)} : ${message}`)
	}

	private date(): string {
		return `[${moment().format('DD/MM/YYYY hh:mm:ss')}]`
	}

	private chooseColors(type: Types): string {
		let sentence: string = ''
		switch (type) {
			case Types.WARN:
				sentence = `${chalk.bold.yellow(type)}`
				break
			case Types.INFO:
				sentence = `${chalk.bold.cyan(type)}`
				break
			case Types.FATAL:
				sentence = `${chalk.bold.rgb(170, 0, 0).bold(type)}`
				break
			case Types.ERROR:
				sentence = `${chalk.bold.rgb(255, 85, 85)(type)}`
				break
			case Types.SUCCES:
				sentence = `${chalk.bold.greenBright(type)}`
				break
		}
		return sentence
	}
}

export default new Logger()
