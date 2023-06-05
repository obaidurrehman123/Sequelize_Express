const { User, Post } = require("../models");
//adding post
const addPost = async (req, res) => {
  try {
    const { userUuid, body } = req.body;
    const user = await User.findOne({ where: { uuid: userUuid } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const newPost = await Post.create({ body, userId: user.id });
    return res.status(200).json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error in adding post" });
  }
};
//getting all the posts wrt the user
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: [{ model: User }] });
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error in fetching posts" });
  }
};
//
module.exports = { addPost, getAllPosts };
