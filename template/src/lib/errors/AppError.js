class ServiceError extends Error {
  constructor({ message, name, code }) {
    super(message);
    this.timestamp = new Date();
    this.name = name;
    this.code = code;
    Error.captureStackTrace(this, ServiceError.captureStackTrace);
  }
}
module.exports = ServiceError;
