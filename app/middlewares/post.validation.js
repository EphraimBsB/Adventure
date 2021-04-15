const Joi = require("joi");

const postValidation = (req, res, next) => {
 const post={
        title: req.body.title,
        userId: 1,
        description:req.body.description
    }
const schema = Joi.object().keys({
    title: Joi.string().required(),
    userId: Joi.number().integer().required(),
    description: Joi.string().min(3).max(512).required()
  });
  const {error} = schema.validate(post);
  if(error){
    return res.status(400).json({
        message:"validation has faild",
        error:error
    });
  }
  req["post"] = post;
  return next();

}
  
  module.exports = {
      postValidation,
  }