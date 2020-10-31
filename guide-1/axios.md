# Axios module

## Using asynchronous request is very easy with Axios

You can configure axios options in the following file

```text
cd App/src/utils/Axios.ts
```

```typescript
configuration: AxiosRequestConfig = {
    // Your options
}
```

To use our module, you shoud to import the module like example :

```typescript
import { Axios } from '../utils'

async  function() {
    const { data } = await Axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data)
    // output : { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
}
```

Axios required an custom configuration and certains params

| params | describes | types |
| :--- | :--- | :--- |
| url | Your API url | string |
| data | Data to cerate or update | string |
| configuration | Configuration of axios module | JSON |

