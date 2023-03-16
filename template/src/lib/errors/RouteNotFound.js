const RestApiError = require('./RestApiError');
class RouteNotFound extends RestApiError {
  constructor() {
    super({
      code: 404,
      status: 404,
      message: 'you look lost',
      name: 'RouteNotFound',
    });
    Error.captureStackTrace(this, RouteNotFound.captureStackTrace);
  }
}

module.exports = RouteNotFound;
