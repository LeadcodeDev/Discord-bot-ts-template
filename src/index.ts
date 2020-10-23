import Bot from '../core/Bot'
import { Example, Help, Test } from './commands'
import { Ready , Message} from './events'
import Guard from './middlewares/Guard'

const Robot = new Bot()

Robot
    .registerCommands([Example, Help, Test])
    .registerEvents([Ready, Message])
    .middleware([Guard])
    .initialize()
    
export default Robot