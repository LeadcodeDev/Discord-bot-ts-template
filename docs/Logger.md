# Logger

#### Using the logger is very easy

The logger is a great way to send error, info or alert messages to the console. You can specify if you want to use the logger globally by activating it in the file
`App/src/configurations/core.ts`

```ts
const defaultTimezone = 'fr-FR' // Your timezone
const logger: boolean = true // Allow or disallow the logger globally
```
The `defaultTimezone` parameter allows you to define the formatting of the time as well as the date of the logger

The logger is used as follows
```ts
import { Logger } from '../utils'
import { Types } from '../interfaces'

async function () {
    await Logger.send(Types.INFO, 'Your message')
}
```
The use of `async/await` keywords is not mandatory but recommended in some cases

| params   | describes                             | types                               | required |
| -------- | ------------------------------------- | ----------------------------------- | -------- |
| type     | Type of log                           | [WARN, INFO, FATAL, ERROR, SUCCES'] | true     |
| message  | Message to send                       | string                              | true     |
