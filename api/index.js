const express = require("express");
const swaggerUI = require("swagger-ui-express");
const { config } = require("../config/config");
const app = express();
const userRouter = require("./components/user/route");
const authRouter = require("./components/auth/route");
const swaggerDoc = require("./swagger.json");
const errors = require("../network/errors");

app.use(express.json());
// routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

//middelware de errors
// errors poner al ultimo para que capte todos los errors
app.use(errors);

app.listen(config.port, () => {
  console.log(`listening at http://localhost:${config.port}`);
});
