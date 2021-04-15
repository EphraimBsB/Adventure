const model = require("../models");

const createUser = async(user) => {
    const create = await model.User.create(user);
    return create;
}

const findUser = async(email) => {
    const userFind = await model.User.findOne({ where: { email } });
    return userFind;
}

module.exports = {
    createUser,
    findUser,
}