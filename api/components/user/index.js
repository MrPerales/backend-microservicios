// const store = require("./../../../store/mysql");
const store = require("./../../../store/remote-mysql"); //microservice
const ctrl = require("./controller");

// con esto facilitamos el hacer pruebas sin usar la DB de produccion
module.exports = ctrl(store);
