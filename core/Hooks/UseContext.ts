import { Client } from 'discord.js'
import Robot from '../../src'

/**
 *	Get Bot unstance
 * @example
 * import { useClient } from '../utils/Hooks'
 * const client = useClient()
 * @returns Client
 */
function useClient(): Client {
	return Robot.getClient()
}

export { useClient }
