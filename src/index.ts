import 'module-alias/register'
import Bot from '@discord-ts-app/core/build/Bot'
import Env from '@discord-ts-app/core/build/utils/Env'
import { Example, Help } from 'App/commands'
import { Ready, Message } from 'App/events'

Bot.registerCommands([Example, Help]).registerEvents([Ready, Message]).registerMiddlewares([]).initialize().login(Env.get('CLIENT_TOKEN'))

export default Bot
