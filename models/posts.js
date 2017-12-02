//DEPENDENCIES
const mongoose = require("mongoose");

//POST SCHEMA
const postSchema = mongoose.Schema({
  url: {type: String, require: true},
  drinkName: {type: String, require: true},
  submittedBy: {type: String, require: true},
  ingredients: String,
  locationName: String,
  locationCity: String,
  locationState: String,
  price: Number,
  yourComments: String
});

//EXPORTS
module.exports = mongoose.model("Posts", postSchema);
