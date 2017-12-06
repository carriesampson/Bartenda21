//DEPENDENCIES
const mongoose = require("mongoose");

//POST SCHEMA
const postSchema = mongoose.Schema({
  url: {type:String , require: true},
  drinkName: {type: String, require: true},
  submittedBy: {type: String, require: true},
  ingredients: String,
  locationName: {type: String, require: true},
  locationCity: {type: String, require: true},
  locationState: {type: String, require: true},
  price: {type: Number, require: true},
  yourComments: String
});

//EXPORTS
module.exports = mongoose.model("Posts", postSchema);
