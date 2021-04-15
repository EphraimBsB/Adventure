const User = require("./user.controller");
const service = require("../../database/acid/services");
const {hashPass, comparePass} = require("../helpers/auth.bcrypt");
const Blog = require("./blog.controller");
const blogService = require("../../database/acid/blog.services");
const userController = new User(service,hashPass,comparePass);
const blogController = new Blog(blogService); 
module.exports = {
    userController:userController,
    blogController: blogController,
};