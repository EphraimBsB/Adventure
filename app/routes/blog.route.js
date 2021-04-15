const express = require('express');
const { blogController } = require('../controllers');
const checkAuth = require('../middlewares/check.auth');
const { postValidation } = require('../middlewares/post.validation');

const route = express.Router();
route.post('/blog',postValidation, checkAuth, blogController.save);
route.get('/blogs',blogController.viewAll);
route.get('/blog/:id',blogController.view);
route.patch('/blog/:id',postValidation, checkAuth, blogController.update);
route.delete('/blog/:id',checkAuth,blogController.destroy);

module.exports = route;