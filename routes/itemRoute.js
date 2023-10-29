const express = require("express");
const router = express.Router();
const itemController = require("../controller/item");

// Get all unit values
router.get("/", itemController.getAllUnitValues);

// Get a unit value by ID
router.get("/:id", itemController.getUnitValueById);

// Create a new unit value
router.post("/", itemController.createUnitValue);

// Update a unit value
router.put("/:id", itemController.updateUnitValue);

// Delete a unit value
router.delete("/:id", itemController.deleteUnitValue);

module.exports = router;