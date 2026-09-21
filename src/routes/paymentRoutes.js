const express = require("express");

const router = express.Router();

const {
    createPayment,
    updatePaymentStatus,
    getPaymentReceipt
} = require("../controllers/paymentController");


/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: Create a payment
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rideId
 *               - fareId
 *               - amount
 *               - paymentMethod
 *             properties:
 *               rideId:
 *                 type: string
 *                 example: RIDE001
 *               fareId:
 *                 type: string
 *                 example: 6ab0d4e96f2c5d312a172bb4
 *               amount:
 *                 type: number
 *                 example: 700
 *               paymentMethod:
 *                 type: string
 *                 example: CARD
 *     responses:
 *       201:
 *         description: Payment created successfully
 */
router.post("/", createPayment);


/**
 * @swagger
 * /api/payments/{paymentId}/status:
 *   put:
 *     summary: Update payment status
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         schema:
 *           type: string
 *         example: 6ab0dd4e64a6cc421be90458
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentStatus:
 *                 type: string
 *                 enum: [PENDING, SUCCESS, FAILED]
 *                 example: SUCCESS
 *     responses:
 *       200:
 *         description: Payment status updated successfully
 *       404:
 *         description: Payment not found
 */
router.put("/:paymentId/status", updatePaymentStatus);


/**
 * @swagger
 * /api/payments/{paymentId}/receipt:
 *   get:
 *     summary: Get payment receipt
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         schema:
 *           type: string
 *         example: 6ab0dd4e64a6cc421be90458
 *     responses:
 *       200:
 *         description: Payment receipt generated successfully
 *       404:
 *         description: Payment not found
 */
router.get("/:paymentId/receipt", getPaymentReceipt);


module.exports = router;