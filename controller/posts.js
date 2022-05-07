const {Blog} = require("../models/blogSchema") 
const Posts = Blog


const allPosts = async (req, res) => {
  try {
    const posts = await Posts.find()
    res.status(200).json(posts);
    console.log("All post")
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
 const getSinglePost = async (req, res) => {
  try {
    if(req.params.id){
    const {id}= req.params;
      const post = await Posts.findById(id);
    post?res.status(200).json(post):res.send("no post");
    console.log("single")}

    else res.json("no id found")
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
 const newPost = async (req, res) => {
  const newPost = new Posts(req.body);
  try {
      await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
 const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  try {
      const updatedPost = await Posts.findByIdAndUpdate(_id, post, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
 const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  try {
      const deletedPost = await Posts.findByIdAndRemove(_id);
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
module.exports = {
  allPosts,
  getSinglePost,deletePost,newPost,updatePost
};
