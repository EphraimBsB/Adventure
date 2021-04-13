const express = require('express');
const { blogController } = require('../controllers');
const { postValidation } = require('../middlewares/post.validation');

const route = express.Router();
route.post('/post',postValidation ,blogController.save);
route.get('/viewAll',blogController.viewAll);
route.get('/view/:id',blogController.view);

module.exports = route;