const express = require("express");

const router = express.Router();

const {
    estimateFare,
    calculateFinalFare
} = require("../controllers/fareController");

/**
 * @swagger
 * /api/fares/estimate:
 *   post:
 *     summary: Estimate fare
 *     tags: [Fare]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - distance
 *             properties:
 *               distance:
 *                 type: number
 *                 example: 5
 *     responses:
 *       200:
 *         description: Fare estimated successfully
 */
router.post("/estimate", estimateFare);


/**
 * @swagger
 * /api/fares/final:
 *   post:
 *     summary: Calculate and save final fare
 *     tags: [Fare]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rideId
 *               - distance
 *             properties:
 *               rideId:
 *                 type: string
 *                 example: RIDE001
 *               distance:
 *                 type: number
 *                 example: 5
 *     responses:
 *       201:
 *         description: Final fare calculated and saved successfully
 */
router.post("/final", calculateFinalFare);

module.exports = router;