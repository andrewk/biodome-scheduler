export function isLaterObject(o) {
  return o.hasOwnProperty('schedules') && o.hasOwnProperty('exceptions');
};

export function mockLater(nextTime) {
  return {
    next() {
      return nextTime;
    }
  };
}
