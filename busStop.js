function number(busStops) {
  // Good Luck!
  let onBus = 0;
  let offBus = 0;
  for (i = 0; i < busStops.length; i++) {
    onBus += busStops[i][0];
    offBus += busStops[i][1];
  }
    return onBus-offBus
}
console.log(number([
  [10, 0],
  [3, 5],
  [5, 8],
]))
