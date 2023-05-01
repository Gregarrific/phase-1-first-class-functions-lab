// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [];
selectingDrivers[0] = returnFirstTwoDrivers(drivers);
selectingDrivers[1] = returnLastTwoDrivers(drivers);

// console.log(selectingDrivers);

function createFareMultiplier(fareMultiplier, fare) {
    if (fareMultiplier === 2) {
        return fare * 2;
    } else if (fareMultiplier === 3) {
        return fare* 3;
    } else if (fareMultiplier === 5) {
        return fare * 5;
    } else {
        return fare = 0;
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2, fare);
}

function fareTripler(fare) {
    return createFareMultiplier(3, fare);
}

function fareQuintupler(fare) {
    return createFareMultiplier(5, fare);
}

// console.log(fareDoubler(10));
