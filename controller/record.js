const Record = require("../models").Record;
const TwItem = require("../models").TwItem;
const Item = require("../models").Item;
const UnitValue = require("../models").UnitValue;

const createRecord = async (req, res) => {
  try {
    const {
      brand_sd,
      device_date,
      engineer_name,
      in_charge_name,
      role,
      shift,
      departmentId,
      twItems,
    } = req.body;

    // Create a new record
    const record = await Record.create({
      brand_sd,
      device_date,
      engineer_name,
      in_charge_name,
      role,
      shift,
      departmentId,
    });

    // Create TwItems associated with the record
    const createdTwItems = await TwItem.bulkCreate(
      twItems.map((twItem) => ({
        ...twItem,
        recordId: record.id,
      }))
    );

    res.status(201).json({ record, twItems: createdTwItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create record", error });
  }
};

const listRecords = async (req, res) => {
  try {
    // Retrieve all records
    const records = await Record.findAll({
      include: [
        {
          model: TwItem,
          include: [
            {
              model: Item,
            },
            {
              model: UnitValue,
            },
          ],
        },
      ],
    });

    res.status(200).json({ records });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve records" });
  }
};

module.exports = {
  createRecord,
  listRecords,
};
