const compression = require("compression");
const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");

const app = express();

/** basic setup */
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

/** routers setup */
const { examplesRouter } = require("./features/Example/routes");

app.use("/examples", examplesRouter);

/** error handling */
const { routeNotFoundHandler, errorHandler } = require("./lib/middlewares");

app.use("*", routeNotFoundHandler);
app.use(errorHandler);

module.exports = app;
