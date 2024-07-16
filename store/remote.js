const axios = require("axios");
// utilizamos axios para facilitar la conexion
function createRemoteDataBaseApi(host, port) {
  const remoteDataBaseCall = axios.create({
    baseURL: `http://${host}:${port}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  async function request({ method, url, data }) {
    try {
      const response = await remoteDataBaseCall({
        method: method,
        url: url,
        data: data,
      });
      console.log("response:", response.headers);
      return response.data.body;
    } catch (error) {
      console.log(error);
    }
  }

  function list(table) {
    const method = "GET";
    const url = `/${table}`;
    return request({ method, url });
  }
  function get(table, id) {
    const method = "GET";
    const url = `/${table}/${id}`;
    return request({ method, url });
  }
  function deleted(table, id) {
    const method = "DELETE";
    const url = `/${table}/${id}`;
    return request({ method, url });
  }
  // function upsert(table, data) {
  //   const method = "PUT";
  //   const url = `/${table}`;
  //   // falta agregar el token para que funcione
  //   return request({ method, url, data });
  // }
  //   function query(table, query, join) {}

  return {
    list,
    get,
    deleted,
    // upsert,
  };
}

module.exports = createRemoteDataBaseApi;
