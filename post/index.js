const express = require("express");
const { config } = require("../config/config");

const postRouter = require("./components/post/route");
const app = express();

app.use(express.json());
app.use("/api/post", postRouter);

// routes
app.listen(config.postPort, () => {
  console.log(`listening POST SERVICE http://localhost:${config.postPort}`);
});
