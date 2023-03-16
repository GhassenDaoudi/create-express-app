const { default: Logger } = require("../Logger");

const errorHandler = () => (error, req, res, next) => {
  Logger.error({ message: error.message, ...error });
  return res.status(error.status).json({
    errors: [
      {
        status: error.status,
        message: error.message,
        name: error.name,
        code: error.code,
        timestamp: error.timestamp,
      },
    ],
  });
};

module.exports = errorHandler;
