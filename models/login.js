//DEPENDENCIES
const mongoose = require("mongoose");

//LOGIN SCHEMA
const loginSchema = mongoose.Schema({
  emailAddress: {type:String, require: true},
  username: {type: String, require: true},
});

//EXPORTS
module.exports = mongoose.model("Login", loginSchema);
