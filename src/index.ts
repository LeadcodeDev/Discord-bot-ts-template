import Bot from '../core/Bot'
import { Example, Help } from './commands'
import { Ready , Message} from './events'
import { AfterStart, BeforeStart, MessageReceived} from './middlewares'

const Robot = new Bot()

Robot
    .registerCommands([Example, Help])
    .registerEvents([Ready, Message])
    .middleware([BeforeStart, AfterStart, MessageReceived])
    .initialize()
    
export default Robot