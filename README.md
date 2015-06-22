# biodome-scheduler

Alpha-quality command scheduler for Biodome, using cron syntax.

```javascript
import { parseSchedule, mostRecentCommandValue } from 'biodome-schedule';
import client from './biodomeConnect';

const refreshTime = 60 * 1000;
const conf = parseSchedule([
  {
    "id": "security_lights",
    "schedule": [
      [1, "00 19 ? * *"],
      [0 , "00 07 ? * *"]
    ]
  }
]);

setInterval(function() {
  conf.forEach(x => {
    client.command({
      id: x.id,
      value: mostRecentCommandValue(x.schedule)
    });
  });
}, refreshTime);
```
