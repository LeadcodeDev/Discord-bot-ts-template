import 'module-alias/register'
import Bot from '@discord-ts-app/core/build/Bot'
import Env from '@discord-ts-app/core/build/Utils/Env'
import { Example, Help } from 'App/Commands'
import { Ready, Message } from 'App/Events'

Bot

    .registerCommands([Example, Help])
    .registerEvents([Ready, Message])
    .registerMiddlewares([])
    .registerModules([])
    .initialize()
    .login(Env.get('CLIENT_TOKEN'))

export default Bot
