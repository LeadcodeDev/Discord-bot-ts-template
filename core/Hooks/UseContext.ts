import Robot from 'App/index'
import { CommandType } from 'Core/types'
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

/**
 *	Get Bot unstance
 * @example
 * import { useClient } from 'Core/Hooks'
 * const client = useClient()
 * @returns Client
 */
function useCommands(): Array<CommandType> {
	return Robot.getCommands()
}

export { useClient, useCommands }
