//DEPENDENCIES
const mongoose = require("mongoose");

//COMMENTS SCHEMA
const commentsSchema = mongoose.Schema({
  author: {type: String, required: true},
  content: {type: String, required: true},
  post: {type: mongoose.Schema.Types.ObjectID, ref: "Post", required: true}
});

//EXPORTS
module.exports = mongoose.model("Comments", commentsSchema);
