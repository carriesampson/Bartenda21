//POSTS CONTROLLER

//DEPENDENCIES
const express = require('express');
const router  = express.Router();

//MODELS
const Posts = require('../models/posts.js');
const Comments = require('../models/comments.js');

//INDEX (GET POSTS) ROUTE
router.get('/', async (req, res) => {
  const allPosts = await Posts.find();
  res.render('../views/home/index.ejs', { allPosts });
});

//CREATE NEW
router.get('/new', (req, res) => {
  res.render('../views/home/new.ejs');
});

//DB SEEDED CREATE ROUTE
router.post('/', async (req, res) => {
  try {
    const createdPost = await Posts.create(req.body);
    res.redirect('back');
  } catch (err) {
    res.send(err.message);
  }
});

//SHOW ROUTE
router.get('/:id', async (req, res) => {
  const onePost = await Posts.findById(req.params.id);
  const comments = await Comments.find({post: onePost._id});
  res.render('../views/home/show.ejs', {onePost, comments});
});

//EDIT (GET) ROUTE
router.get('/:id/edit', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    res.render('../views/home/edit.ejs', {post: post});
  } catch (err) {
    res.send('Invalid');
  };
});

//UPDATE (PUT) ROUTE
router.put('/:id', async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/bartenda/' + post.id);
    } catch (err) {
      res.send(err.message);
  };
});

//DELETE ROUTE
router.delete('/:id', async (req, res) => {
  try {
    await Posts.findByIdAndRemove(req.params.id);
    res.redirect('/bartenda');
  } catch (err) {
    res.send(err.message);
  };
});

//EXPORTS
module.exports = router;
