import later from 'later';

export function parseSchedule(conf) {
  return conf.map(x => {
    return {
      id: x.id,
      schedule: x.schedule.map(sch => [ sch[0], later.parse.cron(sch[1]) ])
    }
  });
}

// FIXME: doing `next` lookup in sort is wasteful
export function commandSort(a, b) {
  return new Date(b[1].next()) - new Date(a[1].next());
}

export function mostRecentCommandValue(scheduledCommands) {
  const sorted = scheduledCommands.sort(commandSort);
  return sorted[0][0];
}
