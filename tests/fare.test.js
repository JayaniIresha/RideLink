const request = require("supertest");
const app = require("../src/app");

describe("Fare API Tests", () => {

    test("POST /api/fares/estimate should calculate fare", async () => {

        const response = await request(app)
            .post("/api/fares/estimate")
            .send({
                distance: 5
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.totalFare).toBe(700);
    });

});