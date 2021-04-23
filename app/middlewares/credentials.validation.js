import Joi from 'joi';

export const registerValidation = (req, res, next) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'org'] } })
      .required(),
    password: Joi.string().min(6).max(30).required(),
  });
  const { error } = schema.validate(user);
  if (error) {
    return res.status(400).json({
      message: 'validation has faild',
      error: error.message,
    });
  }
  req.user = user;
  return next();
};

export const loginValidation = (req, res, next) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'org'] } }),
    password: Joi.string().min(6).max(30).required(),
  });
  const { error } = schema.validate(user);
  if (error) {
    return res.status(400).json({
      message: 'validation has faild',
      error: error.message,
    });
  }
  req.user = user;
  return next();
};
