import { Roles } from '../utils'
import { Message } from 'discord.js'

type EventType = {
	name: any
	run(): void
}

export default EventType
