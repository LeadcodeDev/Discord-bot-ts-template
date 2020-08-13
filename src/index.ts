import { Client } from 'discord.js'
import Bot from './Bot'
import { Example } from './commands'
import { token } from './configurations/core'
import { Ready } from './events'

const client = new Client()
const Robot = new Bot(client, token)

Robot
    .registerCommand(Example)
    .registerEvent(Ready)
    .initialize()