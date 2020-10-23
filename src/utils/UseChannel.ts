import { TextChannel } from 'discord.js'
import { Env } from '.'
import Robot from '..'

export default function useChannel() {
	return {
		channels(id?: number) {
			let channels: Array<any> = []
			Robot.getClient().channels.cache.forEach(async (channel) => {
				channels = [
					...channels,
					{
						id: channel.id,
						type: channel.type,
					},
				]
			})
			return channels
		},
	}
}
