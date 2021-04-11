const express = require('express');
const controller = require('../controllers/blog.controller');
const route = express.Router();
route.get('/post',controller.firstRoute);
route.get('/blog',controller.secondRoute);

module.exports = route;