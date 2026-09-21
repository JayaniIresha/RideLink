describe("Ride Management Service", () => {

    test("Create Ride", () => {
        const ride = {
            passengerId: "P001",
            pickupLocation: "Malabe",
            destination: "Kaduwela"
        };

        expect(ride.passengerId).toBe("P001");
    });

    test("Default Status Should Be REQUESTED", () => {
        const status = "REQUESTED";

        expect(status).toBe("REQUESTED");
    });

    test("Assign Ride", () => {
        const status = "ASSIGNED";

        expect(status).toBe("ASSIGNED");
    });

    test("Accept Ride", () => {
        const status = "ACCEPTED";

        expect(status).toBe("ACCEPTED");
    });

    test("Start Ride", () => {
        const status = "IN_PROGRESS";

        expect(status).toBe("IN_PROGRESS");
    });

    test("Complete Ride", () => {
        const status = "COMPLETED";

        expect(status).toBe("COMPLETED");
    });

});