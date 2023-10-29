const UnitValue = require("../models").UnitValue;

// Get all unit values
const getAllUnitValues = async (req, res) => {
  try {
    const unitValues = await UnitValue.findAll();
    res.status(200).json(unitValues);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a unit value by ID
const getUnitValueById = async (req, res) => {
  const { id } = req.params;
  try {
    const unitValue = await UnitValue.findByPk(id);
    if (unitValue) {
      res.status(200).json(unitValue);
    } else {
      res.status(404).json({ error: "Unit value not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new unit value
const createUnitValue = async (req, res) => {
  const { value, itemId } = req.body;
  try {
    const existingUnitValue = await UnitValue.findOne({ where: { value } });
    if (existingUnitValue) {
      res.status(400).json({ error: "Unit value already exists" });
    } else {
      const unitValue = await UnitValue.create({ value, itemId });
      res.status(201).json(unitValue);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a unit value
const updateUnitValue = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;
  try {
    const unitValue = await UnitValue.findByPk(id);
    if (unitValue) {
      unitValue.value = value;
      await unitValue.save();
      res.status(200).json(unitValue);
    } else {
      res.status(404).json({ error: "Unit value not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a unit value
const deleteUnitValue = async (req, res) => {
  const { id } = req.params;
  try {
    const unitValue = await UnitValue.findByPk(id);
    if (unitValue) {
      await unitValue.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Unit value not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllUnitValues,
  getUnitValueById,
  createUnitValue,
  updateUnitValue,
  deleteUnitValue,
};
