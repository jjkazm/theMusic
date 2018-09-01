var express    = require("express"),
    router     = express.Router(),
    passport   = require("passport"),
    User       = require("../models/user");
    
//**********************************    
//LANDING PAGE
//********************************** 
router.get("/", function(req, res){
    res.render("landing");
});

//**********************************    
//REGISTER
//********************************** 

//render register forml
router.get("/register", function(req, res){
    res.render("register");
});

//register logic
router.post("/register", function(req, res){
     console.log(req.body.newUser);
    var newUser2 = new User({username: req.body.username, email:req.body.email, country:req.body.country, age:req.body.age});
    console.log(newUser2)
   
     User.register(newUser2, req.body.password, function(err, user){
         if(err){
             console.log("cant register")
             return res.redirect("/register");
         }else{
             passport.authenticate("local")(req, res, function(){
                 console.log("registered: "+req.user);
                res.redirect("/albums");
             });
         }
    });
});

//**********************************    
//LOGIN
//********************************** 

//open LOGIN view
router.get("/login", function(req, res){
    res.render("login");
});

//LOGIN logic
router.post("/login", passport.authenticate("local", {
    successRedirect: "/albums",
    failureRedirect: "/login"
}),function(req, res){
    console.log("logged " + req.user);
});

//**********************************    
//LOGOUT
//********************************** 
router.get("/logout", function(req, res){
    req.logout();
    console.log("you are log out")
    res.redirect("/albums");
});

    
module.exports = router;