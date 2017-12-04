//LOGIN CONTROLLER

//DEPENDENCIES
const express = require('express');
const bcrypt  = require('bcrypt');
const router  = express.Router();

//MODELS
const Posts = require('../models/posts.js');
const Comments = require('../models/comments.js');
const Login = require('../models/login.js');
// const Register = require('../models/reg.js')

//LOGIN GET
router.get('/bartenda/login', (req, res) => {
 res.render('../views/users/login.ejs');
});

//LOGIN POST
router.post('/login', async (req, res) => {
  try {
    const login = await Login.findOne({username: req.body.username});
    if (bcrypt.compareSync(req.body.password, login.password)) {
      req.session.username = req.body.username;
      req.session.logged = true;
      res.redirect('/');
    } else {
      req.session.message = 'Invalid username or password';
      res.redirct('/login');
    };
  } catch (err) {
    res.send(err.message);
  };
});

module.exports = router;
