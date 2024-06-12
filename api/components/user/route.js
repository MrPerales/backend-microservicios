const express = require("express");
const router = express.Router();

const response = require("../../../network/response");
router.get("/", async (req, resp, next) => {
  try {
    response.success(req, resp, "Todo Correcto", 200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
