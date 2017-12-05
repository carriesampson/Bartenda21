//LOGIN CONTROLLER

//DEPENDENCIES
const express         = require('express');
const bcrypt          = require('bcrypt');
const router          = express.Router();

//MODELS
const Login = require('../models/login.js');

//GET ROUTE
router.get ('/', (req, res) => {
  res.render('../views/users/login.ejs');
});

//POST ROUTE
router.post ('/login', async (req, res) => {
  const user = await Login.findOne({username: req.body.username});
  if (bcrypt.compareSync(req.body.password, user.password)) {
      req.session.username = req.body.username;
      req.session.logged = true;
      console.log("Req Session/Body: ", req.session, req.body);
      console.log("Login success");
      res.redirect('/');
      } else {
        console.log('Login fail bcrypt compare');
        res.redirect('/login');
    };
});

// //LOGOUT----------------------------------------------
// router.get ('/logout', (req, res) => {
//   req.session.destroy();
//   res.redirect('/');
// });

// //ADD LOGIN VARIABLES---------------------------------------
// router.get('update', (req, res) => {
//   req.session.dash = true;
//   console.log(req.session);
// });

//EXPORT----------------------------------------------
module.exports = router;
