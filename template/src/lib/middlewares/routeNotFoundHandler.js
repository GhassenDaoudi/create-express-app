const RouteNotFound = require("../errors/RouteNotFound");

const routeNotFoundHandler = (_, __, next) => {
  next(new RouteNotFound());
};

module.exports = routeNotFoundHandler;
