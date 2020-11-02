import { Channel, TextChannel } from 'discord.js'
import { Logger } from '..'
import Robot from '../..'
import { LoggerType, UseChannels } from '../../types'

/**
 *	Recovery of all channels
 * @example
 * import { useChannels } from '../utils/Hooks'
 * const MyChannels = useChannels(true)
 *
 * console.log(MyChannels)
 * // Return my channels from discord guild
 *
 * @param truncate Default to false
 * @returns { Channels | undefined }
 */
function useChannels({ truncate }: UseChannels): Array<Channel | any> {
	let channels: Array<any> = []
	Robot.getClient().channels.cache.forEach((channel) => {
		truncate ? (channels = [...channels, { id: channel.id, type: channel.type }]) : (channels = [...channels, channel])
	})
	return channels
}

/**
 *	Recovery of all channels
 * @example
 * import { useChannel } from '../utils/Hooks'
 * const MyChannel = useChannel('583050048766476355')
 *
 * console.log(MyChannel)
 * // Return my channel from discord guild with id
 *
 * @returns Channel
 */
async function useChannel(id: string): Promise<TextChannel | undefined> {
	if (!id) {
		await Logger.send(LoggerType.ERROR, `Please select channel ID`)
		return undefined
	}
	return Robot.getClient().channels.cache.find((channel: any) => channel.id === id) as TextChannel
}

function useMessages() {
	let messagesList: Array<any> = []
	Robot.getClient().channels.cache.forEach((channel) => {
		if (channel instanceof TextChannel) {
			channel.messages.cache.forEach((message) => {
				messagesList = [...messagesList, message]
			})
		}
	})
	return messagesList
}

export { useChannels, useChannel, useMessages }
