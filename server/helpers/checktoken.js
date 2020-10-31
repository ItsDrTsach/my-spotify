require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  //clean the token
  // verify and decode the token
  if (token) {
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }
    console.log(token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(408)
          .json({ success: false, message: "unauthorized!" });
      } else {
        req.email = decoded.email;
        req.name = decoded.name;
        next();
      }
    });
  } else {
    return res.status(400).json({ message: "JWT token must be supllied " });
  }
};
