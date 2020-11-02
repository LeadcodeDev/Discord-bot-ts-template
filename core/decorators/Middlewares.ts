import { Hooks } from 'Core/types'

type Context = {
	lifecycle: Hooks
}

export default function Middleware({ lifecycle }: Context) {
	return function (constructor: Function) {
		constructor.prototype.lifecycle = lifecycle
		constructor.prototype.execute = (params: any) => constructor.prototype.emit(name, params)
	}
}
