const { calculateFare } = require("../services/fareService");
const Fare = require("../models/Fare");

const estimateFare = (req, res) => {
    try {
        const { distance } = req.body;

        const result = calculateFare(distance);

        res.status(200).json({
            success: true,
            message: "Fare estimated successfully",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


// Final Fare Calculation
const calculateFinalFare = async (req, res) => {
    try {
        const { rideId, distance } = req.body;

        const result = calculateFare(distance);

        const fare = await Fare.create({
            rideId: rideId,
            distance: distance,
            baseFare: result.baseFare,
            perKmRate: result.perKmRate,
            totalFare: result.totalFare
        });

        res.status(201).json({
            success: true,
            message: "Final fare calculated and saved successfully",
            data: fare
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    estimateFare,
    calculateFinalFare
};