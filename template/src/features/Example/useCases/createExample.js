const RouteNotFound = require('../../../lib/errors/RouteNotFound');

const createExample = async () => {
  throw new RouteNotFound('ll');
};

module.exports = createExample;
