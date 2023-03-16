const mongoose = require('mongoose');
const retry = require('async-retry');
const Logger = require('../lib/Logger');
const connect = url =>
  retry(
    async (bail, attempt) => {
      Logger.info(`Attempting to connect to database ${attempt}`);
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });
      Logger.info(`connected to database`);
    },
    {
      retries: 10,
      minTimeout: 0,
    },
  );

module.exports = {
  connect,
};
