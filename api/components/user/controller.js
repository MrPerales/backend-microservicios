const USER_TABLE = "user";

module.exports = function (injectedStore) {
  let store = injectedStore;
  // si no nos mandan ninguna store le asignamos una por defecto
  if (!store) {
    store = require("../../../store/dummy");
  }

  function list() {
    return store.list(USER_TABLE);
  }
  function getUser(id) {
    return store.get(USER_TABLE, id);
  }

  return { list, getUser };
};
