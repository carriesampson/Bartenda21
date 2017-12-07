//DEPENDENCIES
const mongoose = require("mongoose");

//POST SCHEMA
const postSchema = mongoose.Schema({
  url: {type: String , require: true},
  drinkName: {type: String, require: true},
  submittedBy: {type: String, require: true},
  ingredients: {type: String, require: true},
  locationName: {type: String, require: true},
  price: Number,
  yourComments: {type: String, require: true}
});

//EXPORTS
module.exports = mongoose.model("Posts", postSchema);
