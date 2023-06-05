const { Router } = require("express");
const { addPost, getAllPosts } = require("../controllers/postsController");
const router = Router();
router.post("/addPost", addPost);
router.get("/getAllPosts", getAllPosts);
module.exports = router;
