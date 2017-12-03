//POSTS CONTROLLER

//DEPENDENCIES
const express = require('express');
const router  = express.Router();

//MODELS
const Posts = require('../models/posts.js');
const Comments = require("../models/comments.js");

//INDEX ROUTE
router.get('/', async (req, res) => {
  const allPosts = await Posts.find();
  res.render("../views/home/index.ejs", { allPosts });
});

// //CREATE ROUTE (APP CREATED PHOTO)
// router.get('/new', (req, res) => {
//   res.render("../views/photos/new.ejs");
// });

//SHOW ROUTE
router.get('/:id', async (req, res) => {
  const onePost = await Posts.findById(req.params.id);
  const comments = await Comments.find({post: onePost._id});
  res.render("../views/home/show.ejs", {onePost, comments});
});

// //DB SEEDED CREATE ROUTE
// router.post('/', async (req, res) => {
//   try {
//     const createdPost = await Posts.create(req.body);
//     res.redirect('back');
//   } catch (err) {
//     res.send(err.message);
//   }
// });

//EXPORTS
module.exports = router;
