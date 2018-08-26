var mongoose = require("mongoose");


var albumSchema = new mongoose.Schema({
  name: String,
  artist: String,
  year: String,
  pic: String,
  description: String,
  user:{
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