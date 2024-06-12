// respuestas para todos los archivos

exports.success = (req, resp, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || "";
  resp.status(status).send({
    error: false,
    status: statusCode,
    body: statusMessage,
  });
};

exports.error = (req, resp, message, status) => {
  let statusCode = status || 500;
  let statusMessage = message || "Internal Server Error";

  resp.status(statusCode).send({
    error: true,
    status: status,
    body: statusMessage,
  });
};
