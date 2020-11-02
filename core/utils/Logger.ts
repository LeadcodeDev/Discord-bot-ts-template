import chalk from 'chalk'
import LoggerList from 'Core/api/logger'
import Env from 'Core/utils/Env'
import moment from 'moment'

class Logger {
	constructor() {
		moment.locale(Env.get('DEFAULT_TIMEZONE'))
	}
	public async send(type: LoggerList, message: string, prod: boolean = true): Promise<void> {
		if (Env.get('LOGGER')) {
			if (process.env.NODE_ENV?.trim() == 'production' && prod) {
				this.sendMessage(type, message)
			} else if (process.env.NODE_ENV?.trim() == 'development') {
				this.sendMessage(type, message)
			}
		}
	}

	private sendMessage(type: LoggerList, message: string): void {
		console.log(`${chalk.rgb(190, 190, 190)(this.date())} ${this.chooseColors(type)} : ${message}`)
	}

	private date(): string {
		return `[${moment().format('DD/MM/YYYY hh:mm:ss')}]`
	}

	private chooseColors(type: LoggerList): string {
		let sentence: string = ''
		switch (type) {
			case LoggerList.WARN:
				sentence = `${chalk.bold.yellow(type)}`
				break
			case LoggerList.INFO:
				sentence = `${chalk.bold.cyan(type)}`
				break
			case LoggerList.FATAL:
				sentence = `${chalk.bold.rgb(170, 0, 0).bold(type)}`
				break
			case LoggerList.ERROR:
				sentence = `${chalk.bold.rgb(255, 85, 85)(type)}`
				break
			case LoggerList.SUCCES:
				sentence = `${chalk.bold.greenBright(type)}`
				break
		}
		return sentence
	}
}

export default new Logger()
