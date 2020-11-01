import Bot from '../core/Bot'
import { Example, Help } from './commands'
import { Ready , Message} from './events'
import { MessageReceived} from './middlewares'

const Robot = new Bot()

Robot
    .registerCommands([Example, Help])
    .registerEvents([Ready, Message])
    .middleware([MessageReceived])
    .initialize()
    
export default Robot