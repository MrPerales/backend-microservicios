const nanoid = require("nanoid");
const USER_TABLE = "user";
const auth = require("./../auth");
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
  async function upsert(data) {
    const user = {
      name: data.name,
      username: data.username,
    };
    if (data.id) {
      user.id = data.id;
    } else {
      user.id = nanoid();
    }
    // para que cada vez que nos cambien el password o username se upsert
    if (data.password || data.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: data.password,
      });
    }
    console.log(user);
    return store.upsert(USER_TABLE, user);
  }
  function remove(id) {
    return store.remove(USER_TABLE, id);
  }

  return { list, getUser, remove, upsert };
};
