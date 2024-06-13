const ctrl = require("./controller");
const store = require("./../../../store/dummy");

// con esto facilitamos el hacer pruebas sin usar la DB de produccion
module.exports = ctrl(store);
