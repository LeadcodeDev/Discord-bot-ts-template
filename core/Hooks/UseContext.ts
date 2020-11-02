import Robot from 'App/index'
import { Client } from 'discord.js'

/**
 *	Get Bot unstance
 * @example
 * import { useClient } from 'Core/Hooks'
 * const client = useClient()
 * @returns Client
 */
function useClient(): Client {
	return Robot.getClient()
}

export { useClient }
