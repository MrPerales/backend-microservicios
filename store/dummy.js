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
  db[table].push(changes);
}

async function remove(table, id) {}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
