const express = require("express");
const swaggerUI = require("swagger-ui-express");
const { config } = require("../config/config");
const app = express();
const userRouter = require("./components/user/route");

const swaggerDoc = require("./swagger.json");

app.use(express.json());
// routes
app.use("/api/user", userRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(config.port, () => {
  console.log(`listening at http://localhost:${config.port}`);
});
