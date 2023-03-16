const ServiceError = require('./AppError');
class RestApiError extends ServiceError {
  constructor({status, code, message, name}) {
    super({code, message, name, status});
    this.status = status;
    Error.captureStackTrace(this, RestApiError.captureStackTrace);
  }
}

module.exports = RestApiError;
