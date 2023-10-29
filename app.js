const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const app = express();

const db = require("./models");

const testRoute = require("./routes/testRoute");
const userRoute = require("./routes/userRoute");
const departmentRoute = require("./routes/departmentRoute");
const unitRoute = require("./routes/unitRoute");
const recordRoute = require("./routes/recordRoute");
const valueRoute = require("./routes/itemRoute");

const accessLog = require("./middleware/accessLog");

app.use(bodyParser.json());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());

// db.sequelize.sync({ force: true });

// app.use('/test', accessLog, testRoute);
// app.use('/user', accessLog, userRoute);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "heelo",
  });
});
app.use("/department", departmentRoute);
app.use("/unit", unitRoute);
app.use("/record", recordRoute);
app.use("/item", valueRoute);

app.listen(config.PORT, () => {
  console.log(`Listening at http://localhost:${config.PORT}`);
});
