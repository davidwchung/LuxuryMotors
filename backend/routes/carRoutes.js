const express = require("express");
const router = express.Router();

const {
  createCar,
  getAllCars,
  getCarById,
  updateAllCars,
  updateCarById,
  deleteAllCars,
  deleteCarById,
} = require("../controllers/carController");

router.post("/", createCar);

router.get("/", getAllCars);

router.get("/:id", getCarById);

router.put("/", updateAllCars);

router.put("/:id", updateCarById);

router.delete("/", deleteAllCars);

router.delete("/:id", deleteCarById);

module.exports = router;
