import { EventList } from '../../types'

type Context = {
	type: EventList
}

export default function Event({ type }: Context) {
	return function (constructor: Function) {
		constructor.prototype.name = type
	}
}
