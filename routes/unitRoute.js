const express = require("express");
const router = express.Router();
const unitValueController = require("../controller/unitController");

// Get all unit values
router.get("/", unitValueController.getAllUnitValues);

// Get a unit value by ID
router.get("/:id", unitValueController.getUnitValueById);

// Create a new unit value
router.post("/", unitValueController.createUnitValue);

// Update a unit value
router.put("/:id", unitValueController.updateUnitValue);

// Delete a unit value
router.delete("/:id", unitValueController.deleteUnitValue);

module.exports = router;