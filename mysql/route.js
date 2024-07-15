const express = require("express");
const response = require("../network/response");
const Store = require("../store/mysql");

const router = express.Router();

router.get("/:table", list);
router.get("/:table/:id", get);
router.put("/:table", upsert);

async function list(req, resp, next) {
  try {
    const table = req.params.table;
    const data = await Store.list(table);
    response.success(req, resp, data, 200);
  } catch (error) {
    response.error(req, resp, error.message, 500);
  }
}
async function get(req, resp, next) {
  try {
    const table = req.params.table;
    const { id } = req.params;
    const data = await Store.get(table, id);
    response.success(req, resp, data, 200);
  } catch (error) {
    response.error(req, resp, error.message, 500);
  }
}

async function upsert(req, resp, next) {
  try {
    const table = req.params.table;
    const body = req.body;
    const data = await Store.upsert(table, body);
    response.success(req, resp, data, 200);
  } catch (error) {
    response.error(req, resp, error.message, 500);
  }
}

module.exports = router;
