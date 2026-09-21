const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        rideId: {
            type: String,
            required: true
        },

        fareId: {
            type: String,
            required: true
        },

        amount: {
            type: Number,
            required: true
        },

        paymentMethod: {
            type: String,
            required: true
        },

        paymentStatus: {
            type: String,
            enum: ["PENDING", "SUCCESS", "FAILED"],
            default: "PENDING"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Payment", paymentSchema);