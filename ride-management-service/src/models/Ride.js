const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
{
    passengerId: {
        type: String,
        required: true
    },

    driverId: {
        type: String
    },

    pickupLocation: {
        type: String,
        required: true
    },

    destination: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: [
            "REQUESTED",
            "ASSIGNED",
            "ACCEPTED",
            "IN_PROGRESS",
            "COMPLETED",
            "CANCELLED"
        ],
        default: "REQUESTED"
    },

    estimatedFare: {
        type: Number,
        default: 0
    },

    finalFare: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Ride", rideSchema);