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

// router.post("/register", function(req, res){
//   User.create(req.body.ziom, function(err, createdUser){
//         if(err){
//             console.log(err);
//         }else{
//             User.register(createdUser, req.body.password, function(err, user){
//                  if(err){
//                      console.log("cant register");
//                      return res.redirect("/register");
//                  }else{
//                      passport.authenticate("local")(req, res, function(){
//                         res.redirect("/albums");
//                      });
//                  }
//             });
//         }
//     });
// });

//  router.post("/register", function(req, res){
//     var newUser = new User(req.body.ziom);
//         console.log(newUser);
//     User.register(newUser, req.body.password, function(err, user){
//         console.log(user);
//         if(err){
//             console.log("we really can't login");
//             return res.redirect("/register");
//         }else{
//             passport.authenticate("local")(req, res, function(){
//                 res.redirect("/albums");
//             });
//         }
//     });
// });

router.post("/register", function(req, res){
    var newUser = new User(
        {username: req.body.username, 
        email: req.body.email, 
        country: req.body.country, 
        age: req.body.age});
    User.register(newUser, req.body.password, function(err, user){
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
}),function(req, res){
   
});

//**********************************    
//LOGOUT
//********************************** 
router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/albums");
});

    
module.exports = router;