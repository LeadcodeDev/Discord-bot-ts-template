# Middlewares

## Creating your own middleware is very easy

Go to the middlewares folder of your application

```text
cd App/src/middlewares
```

Then create a new file, name it whatever you want.

## Your first middleware

Copy and paste the following code :

```typescript
import { Middleware } from '../interfaces'

class Foo extends Middleware {
  public async run() {
    this.on('foo_event', (data) => {
      // Your code here
    })
  }
}

export default new Foo()
```

Then, you can call your middleware in your file :

```typescript
import { Foo } from '.../middlewares'

async function() {
  await Foo.emit('foo_event', data)
}
```

In the `run` function you will be able to write the logic of your middleware Finally, we export the class and instantiate it and we add command in tow files.

`→ App/middlewares/index.ts`

```typescript
import Foo from './Foo'

export { Foo }
```

`→ App/index.ts`

```typescript
import { Client } from 'discord.js'
import Bot from './Bot'
import { Foo } from './middlewares'

const client = new Client()
const Robot = new Bot(client, token)

Robot
  .middleware([Foo]) // 👈 You can add mode middleware in this array
  .initialize()

export default Robot
```

