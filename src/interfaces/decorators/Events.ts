import { EventList } from '../../types'

export default function Event(eventName: EventList) {
	return function (constructor: Function) {
		constructor.prototype.name = eventName
	}
}
