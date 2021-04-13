const express = require('express');
const { blogController } = require('../controllers');
const { postValidation } = require('../middlewares/post.validation');

const route = express.Router();
route.post('/post',postValidation ,blogController.save);
//route.get('/blog',controller.secondRoute);

module.exports = route;