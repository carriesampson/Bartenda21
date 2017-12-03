//DEPENDENCIES
const mongoose = require("mongoose");

//COMMENTS SCHEMA
const commentsSchema = mongoose.Schema({
  submittedBy: {type: String, required: true},
  content: {type: String, required: true},
  post: {type: mongoose.Schema.Types.ObjectId, ref: "Photo", required: true}
});

//EXPORTS
module.exports = mongoose.model("Comments", commentsSchema);
