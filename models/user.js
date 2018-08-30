//I wrote it:
// var mongoose              = require("mongoose"),
//     passLocalMong         = require("passport-local-mongoose");
    

// var userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String,
//     country: String,
//     age: String
// });

// userSchema.plugin("passLocalMong");

// module.exports = mongoose.model("User", userSchema);

var mongoose          = require("mongoose"),
passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    country: String,
    age: String
});

UserSchema.plugin("passportLocalMongoose");

module.exports = mongoose.model("User", UserSchema);

