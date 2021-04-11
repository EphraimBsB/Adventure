import Joi from "joi";

const userValidation = (req, res, next) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(user);
  console.log(schema.validate(user));
  if (error) {
    return res.status(400).json({
      message: "validation has faild",
      error,
    });
  }
  req["user"] = user;
  next();
};

export default userValidation;
