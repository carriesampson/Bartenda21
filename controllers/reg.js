const express         = require('express');
const bcrypt          = require('bcrypt');
const router          = express.Router();
const Reg             = require('../models/reg.js');

//REGISTRATION----------------------------------------
//GET REG.EJS ROUTE
router.get('/register', (req, res) => {
  res.render('../views/users/reg.ejs');
});

//POST ROUTE
router.post('register', async (req, res) =>{
  //ENCRYPT USER EMAIL ADDRESS
  const emailAddress = req.body.emailAddress;
  const emailAddressHash = bcrypt.hashSync(emailAddress, bcrypt.genSaltSync(10));
});
  //ENCRYPT USER PASSWORD
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
});
  //CREATE DB OBJECT
  const userDbEntry = {};
  userDbEntry.emailAddress = emailAddressHash;
  userDbEntry.username = req.body.username;
  userDbEntry.password = passwordHash;
  //MAKE DB UPLOAD
  try {
    const user = await User.create(userDbEntry);
    console.log(user);
    req.session.username = user.username;
    req.session.logged = true;
    res.redirect ('/');
  } catch (err) {
    res.send('Failed to create new user.');
  };
});

//EXPORT----------------------------------------------
module.exports = router;
