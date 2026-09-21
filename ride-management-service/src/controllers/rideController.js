const Ride = require("../models/Ride");

// Create Ride
const createRide = async (req, res) => {
    try {
        const ride = new Ride(req.body);

        const savedRide = await ride.save();

        res.status(201).json(savedRide);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Rides
const getAllRides = async (req, res) => {
    try {
        const rides = await Ride.find();

        res.status(200).json(rides);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get Ride By ID
const getRideById = async (req, res) => {
    try {
        const ride = await Ride.findById(req.params.id);

        if (!ride) {
            return res.status(404).json({
                message: "Ride not found"
            });
        }

        res.status(200).json(ride);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const assignRide = async (req, res) => {
    try {

        const ride = await Ride.findById(req.params.id);

        if (!ride) {
            return res.status(404).json({
                message: "Ride not found"
            });
        }

        ride.status = "ASSIGNED";

        await ride.save();

        res.status(200).json(ride);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const acceptRide = async (req, res) => {
    try {

        const ride = await Ride.findById(req.params.id);

        if (!ride) {
            return res.status(404).json({
                message: "Ride not found"
            });
        }

        if (ride.status !== "ASSIGNED") {
            return res.status(400).json({
                message: "Invalid status transition"
            });
        }

        ride.status = "ACCEPTED";

        await ride.save();

        res.status(200).json(ride);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const startRide = async (req, res) => {
    try {

        const ride = await Ride.findById(req.params.id);

        if (!ride) {
            return res.status(404).json({
                message: "Ride not found"
            });
        }

        if (ride.status !== "ACCEPTED") {
            return res.status(400).json({
                message: "Invalid status transition"
            });
        }

        ride.status = "IN_PROGRESS";

        await ride.save();

        res.status(200).json(ride);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const completeRide = async (req, res) => {
    try {

        const ride = await Ride.findById(req.params.id);

        if (!ride) {
            return res.status(404).json({
                message: "Ride not found"
            });
        }

        if (ride.status !== "IN_PROGRESS") {
            return res.status(400).json({
                message: "Invalid status transition"
            });
        }

        ride.status = "COMPLETED";

        await ride.save();

        res.status(200).json(ride);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const cancelRide = async (req, res) => {
    try {

        const ride = await Ride.findById(req.params.id);

        if (!ride) {
            return res.status(404).json({
                message: "Ride not found"
            });
        }

        ride.status = "CANCELLED";

        await ride.save();

        res.status(200).json(ride);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createRide,
    getAllRides,
    getRideById,
    assignRide,
    acceptRide,
    startRide,
    completeRide,
    cancelRide
};
