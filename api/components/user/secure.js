const auth = require("../../../auth");

module.exports = function checkAuth(action) {
  function middleware(req, resp, next) {
    switch (action) {
      case "update":
        // userID
        const { id } = req.body;
        auth.check(req, id);
        next();
        break;
      case "follow":
        auth.logged(req);
        next();
        break;

      default:
        next();
    }
  }
  return middleware;
};
