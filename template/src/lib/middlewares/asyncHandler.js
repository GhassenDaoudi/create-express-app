const asyncHandler = (fn) => async (req, res, next) => {
  try {
    next(await fn(req, res, next));
  } catch (error) {
    next(error);
  }
};
module.exports = asyncHandler;
