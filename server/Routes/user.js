require("dotenv").config();
const userRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, RefreshToken } = require("../models");
const {
  loginValidation,
  registerValidation,
  tokenValidation,
  pwdUpdateValidation,
  answerValidation,
  userValidation,
} = require("../helpers/validation");
const checktoken = require("../helpers/checktoken");

// register a new user
userRouter.post("/register", async (req, res, next) => {
  const { name, email, password } = req.body;

  //Vaildate the DATA before we create a user
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(406).json({ message: error.details[0].message });
  }

  try {
    //check if email already exist
    const emailExist = await User.findOne({ where: { email } });
    if (emailExist) {
      return res.status(400).json({ message: "email already exists" });
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: `Welcome to my App music ${newUser.name}`,
    });
  } catch (error) {
    next(error);
  }
});
// login
userRouter.post("/login", async (req, res, next) => {
  const { email, password, rememberToken } = req.body;

  //Vaildate the DATA before we checking user
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(406).json({
      success: false,
      message: error.details[0].message,
    });
  }
  try {
    //finding the user according to the email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "email does not exists",
      });
    }
    // validate password
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass)
      return res.status(403).json({ message: "Invalid password" });

    const expiresIn = rememberToken ? "365d" : "3h";

    const dataToEncrypte = {
      email: user.email,
      name: user.name,
    };
    const refreshToken = jwt.sign(
      dataToEncrypte,
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn,
      }
    );

    const accesstoken = jwt.sign(
      dataToEncrypte,
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "900s",
      }
    );

    const isTokenExist = await RefreshToken.findOne({
      where: {
        email: user.email,
      },
    });
    if (!isTokenExist) {
      await RefreshToken.create({
        email: user.email,
        token: refreshToken,
      });
    } else {
      await RefreshToken.update(
        { token: refreshToken },
        {
          where: {
            email: user.email,
          },
        }
      );
    }
    res.cookie("refreshToken", refreshToken);
    res.cookie("accessToken", accesstoken);
    res.cookie("name", user.name.split(" ")[0]);
    res.json({
      success: true,
      message: `welcome back ${user.name}`,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});
// Validate Token
userRouter.get("/validateToken", checktoken, (req, res) => {
  res.json({ valid: true });
});
// Get new access token - refresh token required
userRouter.post("/token", async (req, res, next) => {
  try {
    // Joi Validation
    const { error } = tokenValidation(req.body);
    if (error) {
      console.error(error.message);
      return res
        .status(400)
        .json({ success: false, message: "Don't mess with me" });
    }
    const refreshToken = req.body.token;
    const validRefreshToken = await RefreshToken.findOne({
      where: {
        token: refreshToken,
      },
    });
    if (!validRefreshToken)
      return res.status(403).json({ message: "Invalid Refresh Token" });
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (error) {
          console.error(error.message);
          return res.status(403).json({ message: "Invalid Refresh Token" });
        }
        delete decoded.iat;
        delete decoded.exp;
        const accessToken = generateToken(decoded);
        res.cookie("accessToken", accessToken);
        res.json({ message: "token updated" });
      }
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// logut - refresh token required
userRouter.post("/logout", async (req, res, next) => {
  try {
    // Joi Validation
    const { error } = tokenValidation(req.body);
    if (error) {
      console.error(error.message);
      return res
        .status(400)
        .json({ success: false, message: "Don't mess with me" });
    }
    const result = await RefreshToken.destroy({
      where: {
        token: req.body.token,
      },
    });
    if (!result) {
      return res.status(400).json({ message: "Refresh Token is required" });
    }
    res.json({ message: "User Logged Out Successfully" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

function generateToken(data) {
  return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "900s" });
}
module.exports = userRouter;
