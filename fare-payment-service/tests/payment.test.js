const request = require("supertest");

jest.mock("../src/models/payment", () => ({
    create: jest.fn().mockResolvedValue({
        _id: "TEST_PAYMENT_001",
        rideId: "TEST_RIDE_001",
        fareId: "TEST_FARE_001",
        amount: 700,
        paymentMethod: "CARD",
        paymentStatus: "SUCCESS"
    })
}));

const app = require("../src/app");

describe("Payment API Tests", () => {

    test("POST /api/payments should create payment", async () => {

        const response = await request(app)
            .post("/api/payments")
            .send({
                rideId: "TEST_RIDE_001",
                fareId: "TEST_FARE_001",
                amount: 700,
                paymentMethod: "CARD"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.data.amount).toBe(700);
        expect(response.body.data.paymentMethod).toBe("CARD");
        expect(response.body.data.paymentStatus).toBe("SUCCESS");
    });

});