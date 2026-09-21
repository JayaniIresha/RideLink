const mongoose = require("mongoose");

const fareSchema = new mongoose.Schema(
    {
        rideId: {
            type: String,
            required: true
        },

        distance: {
            type: Number,
            required: true
        },

        baseFare: {
            type: Number,
            required: true
        },

        perKmRate: {
            type: Number,
            required: true
        },

        totalFare: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Fare", fareSchema);