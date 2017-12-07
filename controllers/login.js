//DEPENDENCIES
const express         = require('express');
const bcrypt          = require('bcrypt');
const router          = express.Router();

//MODELS
const Users           = require('../models/users.js');

//LOGIN GET ROUTE
router.get ('/', (req, res) => {
  res.render('../views/users/login.ejs');
});

//LOGIN POST/CREATE SESSION ROUTE
router.post('/', async (req, res) => {
  console.log(req.body);
  const foundUser = await Users.findOne({username: req.body.username});
  console.log(foundUser);
    if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      console.log("inside if");
      req.session.currentUser = foundUser;
      res.redirect('/');
    } else {
      res.send('wrong password');
    };
});

//POST MANAGEMENT PAGE GET ROUTE
router.get('/dash', (req, res) => {
  if (req.session.currentUser) {
    res.render('..views/home/dash.ejs');
  } else {
    res.redirect('/sessions/login');
  };
});

//LOGIN DELETE SESSION ROUTE
router.delete ('/', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// //ADD LOGIN VARIABLES---------------------------------------
// router.get('update', (req, res) => {
//   req.session.dash = true;
//   console.log(req.session);
// });

//EXPORT----------------------------------------------
module.exports = router;
