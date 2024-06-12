// DataBase Dummy

const db = {
  user: [{ id: 1, name: "Carlos" }],
};

function list(table) {
  return db[table];
}
function get(table, id) {
  let data = list(table);
  //   en este caso solo regresa el primer elemento
  return data.find((item) => item.id === id)[0] || null;
}
// update
function upsert(table, changes) {
  db[table].push(changes);
}

function remove(table, id) {}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
