//REGISTRATION CONTROLLER

//DEPENDENCIES
const express         = require('express');
const bcrypt          = require('bcrypt');
const router          = express.Router();

//MODELS
const Reg             = require('../models/reg.js');

//GET ROUTE
router.get('/', (req, res) => {
  res.render('../views/users/reg.ejs');
});

//POST ROUTE ENCRYPTION
router.post('/register', async (req, res) => {
  const emailAddress = req.body.emailAddress;
  const emailAddressHash = bcrypt.hashSync(emailAddress, bcrypt.genSaltSync(10));
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  console.log("Email address Salt: ", emailAddressHash);
  console.log("Password Salt: ", passwordHash);

  //CREATE MONGO DB OBJECT
  const userDbEntry = {};
  userDbEntry.username = req.body.username;
  userDbEntry.emailAddress = emailAddressHash;
  userDbEntry.password = passwordHash;

  //UPLOAD MONGO DB OBJECT
  try {
    const upload = await Reg.create(userDbEntry);
    console.log("Load: ", upload);
    req.session.username = load.username;
    req.session.logged = true;
  } catch (err) {
    res.send(err.message);
  }
});

//EXPORT----------------------------------------------
module.exports = router;
