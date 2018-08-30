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
             return res.redirect("/register");
         }else{
             passport.authenticate("local")(req, res, function(){
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
}),function(req, res){});


    
module.exports = router;