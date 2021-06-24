require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/cars", carRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
