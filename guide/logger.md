---
description: >-
  The logger is a great way to send error, info or alert messages to the
  console. You can specify if you want to use the logger globally by activating
  it in the file App/src/configurations/core.ts
---

# Logger

## Getting Super Powers

Becoming a super hero is a fairly straight forward process:

```typescript
const defaultTimezone = 'fr-FR' // Your timezone
const logger: boolean = true // Allow or disallow the logger globally
```

The `defaultTimezone` parameter allows you to define the formatting of the time as well as the date of the logger.

The logger is used as follows.

{% code title="hello.sh" %}
```typescript
import { Logger } from '../utils'
import { Types } from '../interfaces'

await Logger.send(Types.INFO, 'Your message')
```
{% endcode %}

