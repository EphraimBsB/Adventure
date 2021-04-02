const model = require("../../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validation = require("../middlewares/user.credentials.validation");
//Signup Function

const signup = (req, res) => {
  const { user } = req;

  model.User.findOne({ where: { email: user.email } })
    .then((result) => {
      if (result) {
        res.status(409).json({
          message: "Email already exist",
        });
      } else {
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(user.password, salt, (error, hash) => {
            user["password"] = hash;

            model.User.create(user)
              .then((result) => {
                res.status(201).json({
                  message: "User created succefully",
                });
              })
              .catch((error) => {
                res.status(500).json({
                  message: "Something went wrong",
                });
              });
          });
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
};

module.exports = {
  signup: signup,
};
