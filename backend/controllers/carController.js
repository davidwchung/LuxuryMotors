const Car = require("../models/Car");

const createCar = async (req, res) => {
  try {
    const car = [
      {
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        price: req.body.price,
        horsepower: req.body.horsepower,
        stock: req.body.stock,
        imageUrl: req.body.imageUrl,
      },
    ];
    await Car.insertMany(car);
    res.json(`Car Added`);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateAllCars = async (req, res) => {
  try {
    await Car.updateMany({ price: { $gte: 0 } }, { stock: req.body.stock });
    res.json("All Cars Updated");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateCarById = async (req, res) => {
  try {
    await Car.updateOne({ _id: req.params.id }, { stock: req.body.stock });
    res.json(`Car ${req.params.id} updated`);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteAllCars = async (req, res) => {
  try {
    await Car.deleteMany({ price: { $gte: 0 } });
    res.json("All cars deleted.");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteCarById = async (req, res) => {
  try {
    await Car.deleteOne({ _id: req.params.id });
    res.json(`Car ${req.params.id} deleted`);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateAllCars,
  updateCarById,
  deleteAllCars,
  deleteCarById,
};
