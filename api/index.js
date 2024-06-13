const express = require("express");
const { config } = require("../config/config");
const app = express();
const userRouter = require("./components/user/route");
app.use(express.json());
// routes
app.use("/api/user", userRouter);

app.listen(config.port, () => {
  console.log(`listening at http://localhost:${config.port}`);
});
