//DEPENDENCIES
const mongoose = require("mongoose");

//LOGIN SCHEMA
const loginSchema = new mongoose.Schema({
  emailAddress: {type:String, require: true},
  username: {type: String, require: true},
});

//EXPORTS
module.exports = mongoose.model("Login", loginSchema);
