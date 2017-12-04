//DEPENDENCIES
const mongoose = require("mongoose");

//LOG IN SCHEMA
const loginSchema = mongoose.Schema({
  username: {type: String, require: true},
  password: {type: String, require: true}
});

//EXPORTS
module.exports = mongoose.model("Login", loginSchema);
