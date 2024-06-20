const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

function sign(data) {
  return jwt.sign(data, config.jwtSecret);
}
function check(req, id) {
  const decoded = decodeHeader(req);
  console.log(decoded);
}

function getToken(header) {
  // bearer dfkdkfkdmf
  if (!header) {
    throw new Error("no hay token");
  }
  // recuerda dejar espacio despues de baerer
  if (header.indexOf("bearer ") === -1) {
    // -1 signidica que no lo encontro
    throw new Error("formato invalido ");
  }
  // quitamos el bearer  para dejar solo el token
  let token = header.replace("bearer ", "");
  return token;
}
function verify(token) {
  try {
    // verificamos que este firmado con nuestra firma el token
    return jwt.verify(token, config.jwtSecret);
  } catch (error) {
    throw new Error(error.message);
  }
}

function decodeHeader(req) {
  // obtenermos el token de los headers
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);
  // para tenerlo en el req
  req.user = decoded;
  return decoded;
}

module.exports = {
  sign,
  check,
};
