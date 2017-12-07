//DEPENDENCIES
const mongoose = require("mongoose");

//REGISTRATION SCHEMA
const userSchema = new mongoose.Schema({
  username: {type: String, require: true, unique: true},
  emailAddress: {type: String, require: true, unique: true},
  password: {type: String, require: true},
});

//EXPORTS
module.exports = mongoose.model("Users", userSchema);
