import { Client } from 'discord.js'
import Bot from './Bot'
import { Example } from './commands'
import { token } from './configurations/core'
import { Ready , Message} from './events'
import Guard from './middlewares/Guard';

const client = new Client()
const Robot = new Bot(client, token)

Robot
    .registerCommands([Example])
    .registerEvents([Ready, Message])
    .middleware([Guard])
    .initialize()

export default Robot