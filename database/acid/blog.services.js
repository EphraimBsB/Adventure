const model = require("../models");

const createPost = async(post) => {
    const create = await model.Post.create(post);
    return create;
}

const findAllPost = async() => {
    const findAll = await model.Post.findAll();
    return findAll;
}

const findPost = async(id) => {
    const findOne = await model.Post.findByPk(id);
    return findOne;
}

module.exports = {
    createPost,
    findAllPost,
    findPost
}