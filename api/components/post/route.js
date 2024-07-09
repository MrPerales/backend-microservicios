const express = require("express");
const router = express.Router();

const Controller = require("../post");
const response = require("../../../network/response");

router.get("/", async (req, resp, next) => {
  try {
    const rta = await Controller.list();
    response.success(req, resp, rta, 200);
  } catch (error) {
    response.error(req, resp, error.message, 500);
  }
});

router.get("/add", async (req, resp, next) => {
  try {
    const data = req.body;
    const rta = await Controller.add(data);
    response.success(req, resp, rta, 200);
  } catch (error) {
    response.error(req, resp, error.message, 500);
  }
});

module.exports = router;
