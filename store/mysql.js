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

function get(table, id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (err, data) => {
      console.log(data);
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function insert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, resp) => {
      if (err) return reject(err);
      resolve(resp);
    });
  });
}
function update(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${table} SET ? WHERE id=? `,
      [data, data.id],
      (err, resp) => {
        if (err) return reject(err);
        resolve(resp);
      }
    );
  });
}
function upsert(table, data) {
  return new Promise((resolve, reject) => {
    // ON DUPLICATE KEY UPDATE: Indica que si se encuentra una fila
    // con una clave duplicada (en este caso, id),
    // se deben actualizar las columnas especificadas.
    // asi ya no ocupamos de las otras fucniones insert y update
    // pero recuerda poner el id unico en mysql
    connection.query(
      `INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`,
      [data, data],
      (err, resp) => {
        console.log("UPDATE DATA:", resp);
        if (err) return reject(err);
        const user = resp[0] || null;
        resolve(user);
      }
    );
  });
}

function query(table, query) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err, resp) => {
      if (err) return reject(err);
      resolve(resp[0]);
    });
  });
}
module.exports = {
  list,
  get,
  upsert,
  query,
};
