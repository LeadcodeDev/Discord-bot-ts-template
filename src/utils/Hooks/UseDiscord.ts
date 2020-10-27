import { TextChannel } from 'discord.js'
import { Logger, Env } from '..'
import Robot from '../..'
import { Types } from '../../interfaces'

/**
 *	Recovery of all channels
 * @example
 * // Import hook here
 * import { useChannel } from '../utils'
 *
 * // Using
 * const { channels } = useChannel()
 * const MyChannels = channels(true)
 *
 * // Return my channels from discord guild
 * console.log(MyChannels)
 *
 * @param truncate Default to false
 * @returns Channels
 */
function channels(truncate?: boolean): Array<any> {
	let channels: Array<any> = []
	Robot.getClient().channels.cache.forEach((channel) => {
		truncate ? (channels = [...channels, { id: channel.id, type: channel.type }]) : (channels = [...channels, channel])
	})
	return channels
}

/**
 *	Recovery of all channels
 * @example
 * // Import hook here
 * import { useChannel } from '../utils'
 *
 * // Using
 * const { channel } = useChannel()
 * const MyChannel = channel('583050048766476355')
 *
 * // Return my channel from discord guild with id
 * console.log(MyChannel)
 *
 * @returns Channel
 */
async function channel(id: string) {
	if (!id) return await Logger.send(Types.ERROR, `Please select channel ID`)
	return Robot.getClient().channels.cache.find((channel: any) => channel.id === id) as TextChannel
}

export default function useChannel(): any {
	return {
		channels,
		channel,
	}
}
