const store = require("./../../../store/mysql");
const ctrl = require("./controller");

// con esto facilitamos el hacer pruebas sin usar la DB de produccion
module.exports = ctrl(store);
