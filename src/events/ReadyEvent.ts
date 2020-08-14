import { IEvent } from '../interfaces'

class ReadyEvent implements IEvent {
	public name: string = 'ready'

	run() {
		console.log('Ready !')
	}
}

export default new ReadyEvent()
