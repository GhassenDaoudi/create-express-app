const compression = require("compression");
const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");

const DB = require("./utils/MongoDb");

const errorHandler = require("./lib/middlewares/errorHandler");
const { config } = require("./config");

const express = require("express");

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.disable("x-powered-by");
app.use(hpp());
app.enable("trust proxy");
app.use(helmet());

app.use(compression());
app.use(cors());
app.use(express.static("./public"));

const examplesRouter = require("./routes/examples.router");
const Logger = require("./lib/Logger");
app.use("/groups/moderator", examplesRouter);

app.use("*", (_, __, next) =>
  next(new NotFoundError(MESSAGES.ROUTE_NOT_FOUND))
);

app.use(errorHandler());

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
