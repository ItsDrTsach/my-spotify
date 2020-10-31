const Joi = require("@hapi/joi");

//Register Validation

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    rememberToken: Joi.boolean(),
  });

  return schema.validate(data);
};

// User Validation
const userValidation = (data) => {
  const schema = Joi.object({
    userName: Joi.string()
      .min(1)
      .max(32)
      .regex(/^[a-zA-Z0-9]*$/)
      .required(),
  });

  return schema.validate(data);
};

// Token Validation
const tokenValidation = (data) => {
  const schema = Joi.object({
    token: Joi.string().required(),
  });

  return schema.validate(data);
};

// Answer Validation
const answerValidation = (data) => {
  const schema = Joi.object({
    userName: Joi.string()
      .min(1)
      .max(32)
      .regex(/^[a-zA-Z0-9]*$/)
      .required(),
    securityAnswer: Joi.string()
      .min(8)
      .regex(/^[\w\s]*$/)
      .required(),
  });

  return schema.validate(data);
};

// Password Update Validation
const pwdUpdateValidation = (data) => {
  const schema = Joi.object({
    resetToken: Joi.string().required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
module.exports.userValidation = userValidation;
module.exports.tokenValidation = tokenValidation;
module.exports.pwdUpdateValidation = pwdUpdateValidation;
module.exports.answerValidation = answerValidation;
