import 'module-alias/register'
import Bot from 'Core/Bot'
import { Example, Help } from 'App/commands'
import { Ready , Message} from 'App/events'

const Robot = new Bot()

Robot
    .registerCommands([Example, Help])
    .registerEvents([Ready, Message])
    .registerMiddlewares([])
    .initialize()
    
export default Robot