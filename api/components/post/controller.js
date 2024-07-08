const POST_TABLE = "post";

module.exports = function (injectedStore) {
  let store = injectedStore || require("../../../store/dummy");
  function list() {
    return store.list(POST_TABLE);
  }
  return { list };
};
