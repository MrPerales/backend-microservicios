const express = require("express");
const router = express.Router();

const Controller = require("../auth");
const response = require("../../../network/response");

router.post("/login", async (req, resp) => {
  try {
    const { username, password } = req.body;
    const token = await Controller.login(username, password);
    response.success(req, resp, token, 200);
  } catch (error) {
    response.error(req, resp, "informacion invalida", 400);
  }
});

module.exports = router;
