import Bot from './../../../core/Bot'

export default function Middleware(constructor: Function) {
	console.log('middleware called')
	constructor.prototype.run()
}
