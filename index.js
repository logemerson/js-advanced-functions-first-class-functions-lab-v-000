const returnFirstTwoDrivers = (function(drivers) {
  return [drivers[0], drivers[1]];
})

const returnLastTwoDrivers = (function(drivers) {
  return [drivers.slice(-2)[0], drivers.slice(-1)[0]];
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = 2;
