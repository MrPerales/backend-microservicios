const response = require("./response");

function errors(err, req, resp, next) {
  console.error("[error]", err);

  const message = err.message || "Error Interno";
  const status = err.statusCode || 500;

  response.error(req, resp, message, status);
}

module.exports = errors;
