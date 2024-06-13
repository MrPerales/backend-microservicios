const nanoid = require("nanoid");
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
  function upsert(data) {
    const user = {
      name: data.name,
    };
    if (data.id) {
      user.id = data.id;
    } else {
      user.id = nanoid();
    }
    console.log(user);
    return store.upsert(USER_TABLE, user);
  }
  function remove(id) {
    return store.remove(USER_TABLE, id);
  }

  return { list, getUser, remove, upsert };
};
