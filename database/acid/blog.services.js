const model = require("../models");

const createPost = async(post) => {
    const create = await model.Post.create(post);
    return create;
}