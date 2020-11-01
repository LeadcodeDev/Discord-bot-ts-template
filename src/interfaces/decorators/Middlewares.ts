import { Message } from 'discord.js'
type Context = {
	name: string
}

export default function Middleware({ name }: Context) {
	return function (constructor: Function) {
		constructor.prototype.name = name
		constructor.prototype.execute = (params: any) => constructor.prototype.emit(name, params)
	}
}
