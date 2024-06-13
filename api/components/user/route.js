const express = require("express");
const router = express.Router();

const response = require("../../../network/response");
const Controller = require("./index");
router.get("/", async (req, resp, next) => {
  try {
    const list = await Controller.list();
    response.success(req, resp, list, 200);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, resp, next) => {
  try {
    const { id } = req.params;
    const user = await Controller.getUser(id);

    response.success(req, resp, user, 200);
  } catch (error) {
    response.error(req, resp, error.message, 500);
  }
});

module.exports = router;
