// Get all departments

const Department = require("../models").Department;

const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a department by ID
const getDepartmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const department = await Department.findByPk(id);
    if (department) {
      res.status(200).json(department);
    } else {
      res.status(404).json({ error: "Department not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new department
const createDepartment = async (req, res) => {
  const { name } = req.body;
  try {
    const department = await Department.create({ name });
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a department
const updateDepartment = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const department = await Department.findByPk(id);
    if (department) {
      department.name = name;
      await department.save();
      res.status(200).json(department);
    } else {
      res.status(404).json({ error: "Department not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a department
const deleteDepartment = async (req, res) => {
  const { id } = req.params;
  try {
    const department = await Department.findByPk(id);
    if (department) {
      await department.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Department not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
