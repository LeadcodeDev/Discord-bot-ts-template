# Configurations

#### Configure your bot is very easy

Go to the configurations folder of your application

```
cd App/src/configurations
```
You have 2 files:

##### core.ts
You can configure your secret token and the prefor of your bot
```ts
const token: string = 'Your bot token here'
const prefix: string = '!'

export { token, prefix }
```

##### roles.ts
You can configure set your guild roles here
```ts
const administrateur: number = 743570615306289262
const members: number = 743570760559493191

export { administrateur, members }
```