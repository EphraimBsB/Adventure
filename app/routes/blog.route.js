const express = require('express');
const { blogController } = require('../controllers');
const { postValidation } = require('../middlewares/post.validation');

const route = express.Router();
route.post('/blog',postValidation ,blogController.save);
route.get('/blogs',blogController.viewAll);
route.get('/blog/:id',blogController.view);

module.exports = route;