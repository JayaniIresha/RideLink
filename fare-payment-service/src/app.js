const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const fareRoutes = require("./routes/fareRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
    res.json({
        message: "RideLink Fare & Payment Service is running"
    });
});

app.use("/api/fares", fareRoutes);
app.use("/api/payments", paymentRoutes);



module.exports = app;