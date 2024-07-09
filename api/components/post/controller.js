const POST_TABLE = "post";

module.exports = function (injectedStore) {
  let store = injectedStore || require("../../../store/dummy");
  function list() {
    return store.list(POST_TABLE);
  }
  function add(data) {
    // console.log(data);
    return store.insert(POST_TABLE, data);
  }
  return { list, add };
};
