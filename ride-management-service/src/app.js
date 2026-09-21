const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const rideRoutes = require("./routes/rideRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
    res.json({
        message: "RideLink Ride Management Service is running"
    });
});

app.use("/api/rides", rideRoutes);



module.exports = app;