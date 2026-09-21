const BASE_FARE = 200;
const RATE_PER_KM = 100;

const calculateFare = (distance) => {
    if (!distance || distance <= 0) {
        throw new Error("Distance must be greater than 0");
    }

    const totalFare = BASE_FARE + (distance * RATE_PER_KM);

    return {
        distance,
        baseFare: BASE_FARE,
        perKmRate: RATE_PER_KM,
        totalFare
    };
};

module.exports = {
    calculateFare
};