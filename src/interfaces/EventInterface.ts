import Events from '../utils/EventType'

export default interface EventInterface {
	run(...params: any): void
}
