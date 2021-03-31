const express = require("express");
const app = express();

const postRoute = require('../routes/blog.route');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/blogs', postRoute);

module.exports = app;