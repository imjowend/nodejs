const httpStatus = require("http-status-codes");

exports.success = (req, res, message = "", status = httpStatus.StatusCodes.OK) => {
  res.status(status).send({
    error: false,
    status: status,
    body: message
  });
};

exports.error = (req, res, message = "Internal server error", status = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR) => {
  res.status(status).send({
    error: true,
    status: status,
    body: message
  });
};