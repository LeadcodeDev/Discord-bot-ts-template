import Bot from '../core/Bot'
import { Example, Help } from './commands'
import { Ready , Message} from './events'

const Robot = new Bot()

Robot
    .registerCommands([Example, Help])
    .registerEvents([Ready, Message])
    .middleware([])
    .initialize()
    
export default Robot