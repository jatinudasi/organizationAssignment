const express = require("express");
const router = express.Router();
const recordController = require("../controller/record");

router.post("/", recordController.createRecord);
router.get("/", recordController.listRecords);
module.exports = router;
