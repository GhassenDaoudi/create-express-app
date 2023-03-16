const RouteNotFound = require("../../../lib/errors/RouteNotFound");

const createExample = async () => {
  throw new RouteNotFound("ll");
  return { message: "createExample" };
};

module.exports = createExample;
