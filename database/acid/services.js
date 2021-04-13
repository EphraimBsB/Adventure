const model = require("../models");

// User authentication CRUD
const createUser = async(user) => {
    const create = await model.User.create(user);
    return create;
}

const findUser = async(email) => {
    const userFind = await model.User.findOne({ where: { email } });
    return userFind;
}

//Blog CRUD
const createPost = async(post) => {
    const create = await model.Post.create(post);
    return create;
}
module.exports = {
    createUser,
    findUser,
    createPost
}