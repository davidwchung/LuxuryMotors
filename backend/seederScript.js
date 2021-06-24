require("dotenv").config();

const carData = require("./data/carData");
const connectDB = require("./config/db");
const Car = require("./models/Car");

connectDB();

const importData = async () => {
  try {
    await Car.deleteMany({});

    await Car.insertMany(carData);

    console.log("Data Import Success");
    process.exit(1);
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};

importData();
