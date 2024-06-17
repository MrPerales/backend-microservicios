const AUTH_TABLE = "auth";
const authSign = require("../../../auth");
const bcrypt = require("bcrypt");

module.exports = function (injectedStore) {
  let store = injectedStore || require("../../../store/dummy");

  async function upsert(data) {
    const authData = {
      id: data.id,
    };
    if (data.username) {
      authData.username = data.username;
    }
    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 8);
    }
    return store.upsert(AUTH_TABLE, authData);
  }
  async function login(username, password) {
    const data = await store.query(AUTH_TABLE, { username });
    const isMatch = await bcrypt.compare(password, data.password);
    if (isMatch) {
      // genera token
      return authSign.sign(data);
    } else {
      throw new Error("informacion invalida ");
    }
  }
  return { upsert, login };
};
