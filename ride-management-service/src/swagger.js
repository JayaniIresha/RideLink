const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "RideLink Ride Management Service API",
            version: "1.0.0",
            description: "API documentation for Ride Management Service"
        },
        servers: [
            {
                url: "http://localhost:5002"
            }
        ]
    },
    apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
