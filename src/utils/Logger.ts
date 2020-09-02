import { Middleware, Command, Types } from '../interfaces'
import chalk from 'chalk'
import moment from 'moment'
import { defaultTimezone, logger } from '../configurations/core'

class Logger extends Middleware {
	constructor() {
		super()
		moment.locale(defaultTimezone)
	}
	public async run() {
		this.on('logger', (type: Types, message: string, prod: boolean = true): void => {
			if (logger) {
				if (process.env.NODE_ENV?.trim() == 'production' && prod) {
					this.send(type, message)
				} else if (process.env.NODE_ENV?.trim() == 'development') {
					this.send(type, message)
				}
			}
		})
	}

	private send(type: Types, message: string): void {
		console.log(`${chalk.rgb(190, 190, 190)(this.date())} ${this.chooseColors(type)} : ${message}`)
	}

	private date(): string {
		return `[${moment().format('DD/MM/YYYY hh:mm:ss')}]`
	}

	private chooseColors(type: Types): string {
		let sentence: string = ''
		switch (type) {
			case Types.WARN:
				sentence = `${chalk.yellow(type)}`
				break
			case Types.INFO:
				sentence = `${chalk.cyan(type)}`
				break
			case Types.FATAL:
				sentence = `${chalk.rgb(170, 0, 0).bold(type)}`
				break
			case Types.ERROR:
				sentence = `${chalk.rgb(255, 85, 85)(type)}`
				break
			case Types.SUCCES:
				sentence = `${chalk.greenBright(type)}`
				break
		}
		return sentence
	}
}

export default new Logger()
