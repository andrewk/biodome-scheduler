import { parseSchedule, mostRecentCommandValue } from 'biodome-schedule';

// setup client
const client = {}; // TODO
const refreshTime = 60 * 1000;
const conf = parseSchedule([
  {
    "id": "light",
    "schedule": [
      ["on", "00 10 ? * *"],
      ["off" , "00 24 ? * *"]
    ]
  },
  {
    "id": "alarm",
    "schedule": [
      ["on", "00 10 ? * *"],
      ["off", "00 24 ? * *"],
    ]
  },
]);

setInterval(function() {
  conf.forEach(x => {
    client.command({
      id: x.id,
      value: mostRecentCommandValue(x.schedule)
    });
  });
}, refreshTime);
