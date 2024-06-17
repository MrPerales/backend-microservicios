// DataBase Dummy

const db = {
  user: [{ id: "1", name: "Carlos" }],
};

async function list(table) {
  return db[table];
}
async function get(table, id) {
  let data = await list(table);
  //   en este caso solo regresa el primer elemento
  const user = data.find((item) => item.id === id) || null;
  return user;
}
// update
async function upsert(table, changes) {
  // creamos una tabla si no existe en la db
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(changes);
  console.log(db);
  return { message: "user upsert" };
}

async function remove(table, id) {
  const userIndex = db[table].findIndex((user) => user.id === id);
  if (userIndex >= 0) {
    db[table].slice(userIndex, 1);
  }
  return { message: "user deleted " };
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
