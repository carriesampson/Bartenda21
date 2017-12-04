//DEPENDENCIES
const mongoose = require("mongoose");

//REGISTRATION SCHEMA
const regSchema = mongoose.Schema({
  emailAddress: {type:String, require: true},
  username: {type: String, require: true},
  password: {type: String, require: true},
  retypePassword: {type: String, require: true}
});

//EXPORTS
module.exports = mongoose.model("Reg", regSchema);
