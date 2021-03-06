var mongoose = require("mongoose");


var albumSchema = new mongoose.Schema({
  title: String,
  artist: String,
  year: String,
  cover: String,
  description: String,
  creator:{
      id:{
          type:mongoose.Schema.Types.ObjectId,
          ref: "User"
      },
      username: String
  },
  comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
  }]
});

module.exports = mongoose.model("Album", albumSchema);