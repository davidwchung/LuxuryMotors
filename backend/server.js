require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/cars", carRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Luxury Motors API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
