const Logger = require('../Logger');

const errorHandler = (error, _, res) => {
  Logger.error({message: error.message, ...error});
  return res.status(error.status).send({
    status: error.status,
    message: error.message,
    name: error.name,
    code: error.code,
    timestamp: error.timestamp,
  });
};

module.exports = errorHandler;
