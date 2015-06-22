import { assert } from 'chai';
import { isLaterObject, mockLater } from './support';
import { parseSchedule, mostRecentCommandValue} from '../index';

const conf = [
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
];

describe('parseSchedule', function() {
  it('converts schedules to parsed results of later library', function() {
    parseSchedule(conf)
    .map(s => s.schedule)
    .reduce((prev, curr) => prev.concat(curr))
    .forEach(schedule => assert(isLaterObject(schedule[1])));
  });
});

describe('mostRecentCommandValue', function() {
  it('returns value of most recently scheduled command', function() {
    const cmds =  [
      ['1', mockLater('Mon, 20 May 2013 11:01:00 GMT')],
      ['2', mockLater('Mon, 21 May 2013 11:02:00 GMT')],
      ['3', mockLater('Mon, 12 June 2013 11:03:00 GMT')],
      ['4', mockLater('Mon, 22 May 2013 12:01:00 GMT')],
    ];

    assert.equal(mostRecentCommandValue(cmds), 3);
  });
});
