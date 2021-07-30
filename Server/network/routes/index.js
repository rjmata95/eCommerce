const products = require("./products");
const login = require("./login");
const routes = (server) => {
  try {
    server.use("/products", products);
    server.use("/login", login);
  } catch (error) {
    console.error(`Error in routing: ${error}`);
  }
};

module.exports = routes;
