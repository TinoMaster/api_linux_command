const express = require("express");
const categories_routes = require("./categories.routes");

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use(categories_routes);
}

module.exports = routerApi;
