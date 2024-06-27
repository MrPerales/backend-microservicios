const mysql = require("mysql2");

const { config } = require("../config/config");

const dbConfig = {
  port: config.mysqlPort,
  host: config.mysqlHost,
  user: config.mysqlUser,
  password: config.mysqlPassword,
  database: config.mysqlDatabase,
};

let connection;
// verificacion para conectar a DB
function handleCon() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error("[db err]", err);
      setTimeout(handleCon, 2000);
    } else {
      console.log("DB conected");
    }
  });
  connection.on("error", (err) => {
    console.error("[db err]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleCon();
    } else {
      throw err;
    }
  });
}
handleCon();

function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      console.log(data);
      if (err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = {
  list,
};
