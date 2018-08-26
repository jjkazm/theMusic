var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    country: String,
    age: String
});

module.exports = mongoose.model("User", userSchema);