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

const updatePost = async(updatedPost,obj) => {
    const upDate = await model.Post.update(updatedPost,obj)
    return upDate;
}

const deletePost = async(obj) => {
    const destroy = await model.Post.destroy(obj);
    return destroy;
}

module.exports = {
    createPost,
    findAllPost,
    findPost,
    updatePost,
    deletePost
}