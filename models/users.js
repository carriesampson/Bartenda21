//DEPENDENCIES
const mongoose = require("mongoose");

//REGISTRATION SCHEMA
const userSchema = new mongoose.Schema({
  username: {type: String, require: true},
  emailAddress: {type: String, require: true},
  password: {type: String, require: true},
  retypePassword: {type: String, require: true}
});

//EXPORTS
module.exports = mongoose.model("Users", userSchema);
