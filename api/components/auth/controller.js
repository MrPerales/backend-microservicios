const AUTH_TABLE = "auth";

module.exports = function (injectedStore) {
  let store = injectedStore || require("../../../store/dummy");
  function upsert(data) {
    const authData = {
      id: data.id,
    };
    if (data.username) {
      authData.username = data.username;
    }
    if (data.password) {
      authData.password = data.password;
    }
    return store.upsert(AUTH_TABLE, authData);
  }
  async function login(username, password) {
    const data = await store.query(AUTH_TABLE, { username: username });
    if (data.password === password) {
      // genera token
      return "token";
    } else {
      throw new Error("informacion invalida ");
    }
  }
  return { upsert, login };
};
