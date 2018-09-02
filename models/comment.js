var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
  content: String,
  rating: Number,
  creator:{
      id:{
          type:mongoose.Schema.Types.ObjectId,
          ref: "User"
      },
      username: String
  },
});

module.exports = mongoose.model("Comment", commentSchema);