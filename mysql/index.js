const express = require("express");

const { config } = require("../config/config");
const mySqlServiceRouter = require("./route");
const app = express();
app.use(express.json());

// routes
app.use("/", mySqlServiceRouter);

app.listen(config.mysqlServicePort, () => {
  console.log(`Sevicio de mysql http://localhost:${config.mysqlServicePort}`);
});
