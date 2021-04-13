const express = require('express');
const { blogController } = require('../controllers');
const checkAuth = require('../middlewares/check.auth');
const { postValidation } = require('../middlewares/post.validation');

const route = express.Router();
route.post('/post',postValidation, checkAuth, blogController.save);
route.get('/viewAll',blogController.viewAll);
route.get('/view/:id',blogController.view);
route.patch('/update/:id',postValidation, checkAuth, blogController.update);
route.delete('/delete/:id',checkAuth,blogController.destroy);

module.exports = route;