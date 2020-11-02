import dotenv from 'dotenv'
dotenv.config()

class Env {
	/**
	 *
	 * @param key .env variable
	 */
	public get(key: string): string {
		return process.env[key] || ''
	}
}

export default new Env()
