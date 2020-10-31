const { response } = require("../server");

module.exports = function (error, req, res, next) {
  res.status(400).json({ message: "Cannot process request" });
};
