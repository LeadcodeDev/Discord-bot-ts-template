import { Event } from '../interfaces'

class ReadyEvent implements Event {
	public name: string = 'ready'

	run() {
		console.log('Ready !')
	}
}

export default new ReadyEvent()
