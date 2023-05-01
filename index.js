const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
}

function createFareMultiplier(fareMultiplier) {
    return function (fare) {
      return fareMultiplier * fare;
    };
  }

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);