import { IEvent } from '../interfaces'

class Ready implements IEvent {
	public name = 'ready'

	run() {
		console.log('Ready !')
	}
}

export default new Ready()
