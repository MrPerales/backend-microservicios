const express = require("express");
const router = express.Router();
const secureMiddleware = require("./secure");
const response = require("../../../network/response");
const Controller = require("./index");

router.get("/", async (req, resp, next) => {
  try {
    const list = await Controller.list();
    console.log(list, "lista");
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
router.post("/", async (req, resp, next) => {
  try {
    const body = req.body;
    console.log(body);
    const rta = await Controller.upsert(body);
    response.success(req, resp, rta, 200);
  } catch (error) {
    response.error(req, resp, error.message, 500);
  }
});

router.delete("/:id", async (req, resp, next) => {
  try {
    const { id } = req.params;
    const rta = await Controller.remove(id);
    response.success(req, resp, rta, 200);
  } catch (error) {
    response.error(req, resp, error.message, 500);
  }
});
router.put("/", secureMiddleware("update"), async (req, resp, next) => {
  try {
    const body = req.body;
    const rta = await Controller.upsert(body);
    response.success(req, resp, rta, 200);
  } catch (error) {
    response.error(req, resp, error.message, 500);
  }
});

// route follow

router.post(
  "/follow/:id",
  secureMiddleware("follow"),
  async (req, resp, next) => {
    try {
      // usuario de uno
      const userId = req.user.id;
      // usuario al que intentas
      const followId = req.params.id;
      const rta = await Controller.follow(userId, followId);
      response.success(req, resp, rta, 200);
    } catch (error) {
      response.error(req, resp, error.message, 500);
    }
  }
);

module.exports = router;
