import { EventType } from '../../utils'

export default function Event(eventName: EventType) {
	return function (constructor: Function) {
		constructor.prototype.name = eventName
	}
}
