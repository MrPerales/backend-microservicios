const store = require("../../../store/dummy");
const USER_TABLE = "user";

function list() {
  return store.list(USER_TABLE);
}

module.exports = { list };
