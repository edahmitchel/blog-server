const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema ({
    title: String,
    subtitle: String,
    author: String,
    content: String,
    tag: String,
    image: String,


})
const Blog = mongoose.model('Blog', blogSchema);
module.exports = {Blog, mongoose}