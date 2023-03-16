const app = require("./app");
const { config } = require("./config");
const Logger = require("./lib/Logger");

const main = async () => {
  const server = app.listen(config.api.port, () => {
    Logger.info(
      `${config.meta.service.name} is running on port ${config.api.port}`
    );
  });

  process.on("SIGTERM", () => {
    Logger.info(
      `SIGTERM signal received: closing ${config.meta.service.name} service`
    );
    server.close(() => {
      Logger.info(`${config.meta.service.name} service closed`);
    });
  });

  process.on("SIGINT", () => {
    Logger.info(
      `SIGINT signal received: closing ${config.meta.service.name} service`
    );
    server.close(() => {
      Logger.info(`${config.meta.service.name} service closed`);
    });
  });
};

main().catch((e) => {
  Logger.crit(`${config.meta.service.name} service stopped unexpectedly`);
});
