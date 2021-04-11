const User = require("./user.controller");
const model = require("../../database/models");
const {hashPass, comparePass} = require("../helpers/auth.bcrypt");
const userController = new User(model,hashPass,comparePass);

module.exports = {
    userController:userController,
    hashPass:hashPass
};