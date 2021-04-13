const Joi = require("joi");

//registration validation
const registerValidation = (req, res, next) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "org"] } })
      .required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(user);
  if (error) {
    return res.status(400).json({
      message: "validation has faild",
      error,
    });
  }
  req["user"] = user;
  return next();
}

// login validation
const loginValidation = (req, res, next) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "org"] } })
      .required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(user);
  if (error) {
    return res.status(400).json({
      message: "validation has faild",
      error,
    });
  }
  req["user"] = user;
  return next();
};
module.exports = {
  registerValidation,
  loginValidation,
};
