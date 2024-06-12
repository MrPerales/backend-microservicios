const express = require("express");
const router = express.Router();

const response = require("../../../network/response");
const Controller = require("./controller");
router.get("/", async (req, resp, next) => {
  try {
    const list = await Controller.list();
    response.success(req, resp, list, 200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
