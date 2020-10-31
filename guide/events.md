---
description: You cas use discord.js events
---

# Events

## Using discord events

Becoming a super hero is a fairly straight forward process:

```
node ace make:event guildMemberAdd
```

One file will be created and another will be altered.

{% code title="App/src/events/GuildMemberAdd.ts" %}
```typescript
  
import { EventInterface } from '../interfaces'
import { EventList, LoggerType } from '../types'
import { Logger, Env } from '../utils'

import { Event } from './../interfaces/decorators'

@Event({ type: EventList.GUILD_MEMBER_ADD })
class GuildMemberAdd implements EventInterface {
	public async run() {
		// Your code here
	}
}
export default new GuildMemberAdd()
```
{% endcode %}

{% hint style="info" %}
Your newly created file is automatically added to the index.ts of the App/src/commands document.
{% endhint %}

{% code title="App/src/events/index.ts" %}
```typescript
  
import Ready from './Ready'
import Message from './Message'
import GuildMemberAddfrom './GuildMemberAdd'

export { Ready, Message, GuildMemberAdd }
```
{% endcode %}

Now that your order has been created, you will need to add it to the instance of your bot

{% code title="App/src/index.ts" %}
```typescript
import Bot from '../core/Bot'
import { Example, Help } from './commands'
import { Ready , Message, GuildMemberAdd} from './events' // 👈 Import your command here
import Guard from './middlewares/Guard'

const Robot = new Bot()

Robot
    .registerCommands([Example, Help])
    .registerEvents([Ready, Message, GuildMemberAdd]) // 👈 Add your command here
    .middleware([Guard])
    .initialize()
    
export default Robot
```
{% endcode %}

