const winston = require('winston');
const options = {
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'debug' : 'debug',
    }),
    new winston.transports.File({
      filename: 'debug.log',
      level: 'debug',
    }),
  ],
};

const Logger = winston.createLogger(options);

if (process.env.NODE_ENV !== 'production') {
  Logger.debug('Logging initialized at debug level');
}

module.exports = Logger;
