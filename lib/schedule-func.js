import later from 'later';

export function parseSchedule(conf) {
  return conf.map(x => {
    return {
      id: x.id,
      schedule: x.schedule.map(sch => [ sch[0], later.parse.cron(sch[1]) ])
    }
  });
}
