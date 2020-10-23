# Axios module

#### Using hooks is very easy...

List all channels of guild :
```ts
// Import hook here
import { useChannel } from '../utils'

// Using
const { channels } = useChannel()
const MyChannels = channels(true) // Default to false, show truncate return

// Return my channels from discord guild
console.log(MyChannels)
```

Get one channel by `id` :
```ts
// Import hook here
import { useChannel } from '../utils'

// Using
const { channel } = useChannel()
const MyChannel = channel('583050048766476355')

// Return my channel from discord guild with id
console.log(MyChannel)
```