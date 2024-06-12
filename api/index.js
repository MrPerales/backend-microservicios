const express = require("express");
const { config } = require("../config/config");
const app = express();
const user = require("./components/user/network");

// routes
app.use("/api/user", user);

app.listen(config.port, () => {
  console.log(`listening at http://localhost:${config.port}`);
});
