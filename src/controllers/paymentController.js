const Payment = require("../models/payment");

const createPayment = async (req, res) => {
    try {
        const {
            rideId,
            fareId,
            amount,
            paymentMethod
        } = req.body;

        const payment = await Payment.create({
            rideId,
            fareId,
            amount,
            paymentMethod,
            paymentStatus: "SUCCESS"
        });

        res.status(201).json({
            success: true,
            message: "Payment created successfully",
            data: payment
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


const updatePaymentStatus = async (req, res) => {
    try {
        const { paymentId } = req.params;
        const { paymentStatus } = req.body;

        const payment = await Payment.findByIdAndUpdate(
            paymentId,
            { paymentStatus },
            { new: true }
        );

        if (!payment) {
            return res.status(404).json({
                success: false,
                message: "Payment not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Payment status updated successfully",
            data: payment
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


const getPaymentReceipt = async (req, res) => {
    try {
        const { paymentId } = req.params;

        const payment = await Payment.findById(paymentId);

        if (!payment) {
            return res.status(404).json({
                success: false,
                message: "Payment not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Payment receipt generated successfully",
            receipt: {
                paymentId: payment._id,
                rideId: payment.rideId,
                fareId: payment.fareId,
                amount: payment.amount,
                paymentMethod: payment.paymentMethod,
                paymentStatus: payment.paymentStatus,
                paymentDate: payment.createdAt
            }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    createPayment,
    updatePaymentStatus,
    getPaymentReceipt
};