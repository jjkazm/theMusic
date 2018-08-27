var mongoose              = require("mongoose"),
    passLocalmong         = require("passport-local-mongoose");
    

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    country: String,
    age: String
});

userSchema.plugin("passLocalmong");

module.exports = mongoose.model("User", userSchema);