const User = require("./user.controller");
const service = require("../../database/acid/services");
const {hashPass, comparePass} = require("../helpers/auth.bcrypt");
const userController = new User(service,hashPass,comparePass);
module.exports = {
    userController:userController,
    hashPass:hashPass
};