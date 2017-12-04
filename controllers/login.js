const express         = require('express');
const bcrypt          = require('bcrypt');
const router          = express.Router();
const Login           = require('../models/login.js');

//LOGIN-----------------------------------------------
//GET LOGIN.EJS  ROUTE
router.get ('/login', (req, res) => {
  res.render('../views/users/login.ejs');
});

//POST USER/PASS CREDENTIALS FOR LOGIN AUTHENTICATION
router.post ('/login', async (req, res) => {
  try {
    const user = await Login.findOne({username: req.body.username});
    if (bcrypt.compareSync(req.body.password, user.password)) {
      req.session.username = req.body.username;
      req.session.logged = true;
      req.session.message = 'Login success!'
      console.log(req.session, req.body);
      res.redirect('/');
      } else {
        console.log('User login fail bcrypt compare.');
        req.session.message = "Invalid username or password. Please try again.";
        res.redirect('/login');
    };
  } catch (err) {
    req.session.message = "Something went wrong. Please try again."
    console.log("Something went wrong.");
    res.redirect('/login');
  };
});

//LOGOUT----------------------------------------------
router.get ('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

//ADD LOGIN VARIABLES---------------------------------------
router.get('update', (req, res) => {
  req.session.dash = true;
  console.log(req.session);
});

//EXPORT----------------------------------------------
module.exports = router;
