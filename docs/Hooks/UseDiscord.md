# UseDiscord hook

#### Using hooks is very easy...

- List all channels of guild :
```ts
// Import hook here
import { useDiscord } from '../utils'

// Using
const { channels } = useDiscord()
const MyChannels = channels(true) // Default to false, show truncate return

// Return my channels from discord guild
console.log(MyChannels)
```

- Get one channel by `id` :
```ts
// Import hook here
import { useDiscord } from '../utils'

// Using
const { channel } = useDiscord()
const MyChannel = channel('583050048766476355')

// Return my channel from discord guild with id
console.log(MyChannel)
```
---------------
- List all messages registered in the guild :
```ts
// Import hook here
import { useDiscord } from '../utils'

// Using
const { messages } = useDiscord()
const MyMessages = messages()

// Return messages from discord guild
console.log(MyMessages)
```