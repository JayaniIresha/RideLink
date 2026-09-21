const express = require("express");

const router = express.Router();

const {
    createRide,
    getAllRides,
    getRideById,
    assignRide,
    acceptRide,
    startRide,
    completeRide,
    cancelRide
} = require("../controllers/rideController");

// Create Ride
router.post("/", createRide);

// Get All Rides
router.get("/", getAllRides);

// Get Ride By ID
router.get("/:id", getRideById);

router.put("/:id/assign", assignRide);

router.put("/:id/accept", acceptRide);

router.put("/:id/start", startRide);

router.put("/:id/complete", completeRide);

router.put("/:id/cancel", cancelRide);

module.exports = router;