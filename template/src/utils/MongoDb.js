const mongoose = require("mongoose");
const retry = require("async-retry");
const connect = (url) =>
  retry(
    async (bail, attempt) => {
      try {
        Logger.info(`Attempting to connect to database ${attempt}`);
        await mongoose.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        });
        console.log("MongoDB Connected ...");
      } catch (err) {
        throw err;
      }
    },
    {
      retries: 10,
      minTimeout: 0,
    }
  );

module.exports = {
  connect,
};
