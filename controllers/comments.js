//COMMENTS CONTROLLER

//DEPENDENCIES
const express     = require("express");
const router      = express.Router();

//MODELS
const Posts       = require('../models/posts.js');
const Comments    = require('../models/comments.js');

//INDEX ROUTE
router.get('/', async (req, res) => {
  const allComments = await Comments.find().populate("post");
  res.send(allComments);
});

//CREATE ROUTE
router.post("/", async (req, res) => {
  try {
    const createdComment = await Comments.create(req.body);
    res.redirect("back");
  } catch (err) {
    res.send(err.message);
  }
});

//SHOW ROUTE
router.get('/:id', async (req, res) => {
  const onePost = await Posts.findById(req.params.id);
  const comments = await Comments.find({post: onePost._id});
  res.render("../views/home/show.ejs", {onePost, comments});
});

//----------------------------------------------------
//EXPORTS
module.exports = router;
