const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

function sign(data) {
  return jwt.sign(data, config.jwtSecret);
}

module.exports = {
  sign,
};
