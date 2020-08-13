import { IEvent } from '../interfaces'

class Message implements IEvent {
	public name = 'message'

	run() {
		console.log('Message reçus')
	}
}

export default new Message()
