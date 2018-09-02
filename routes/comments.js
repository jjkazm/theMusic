var express = require("express"),
    router  = express.Router({mergeParams: true}),
    Comment = require("../models/comment"),
    User    = require("../models/user"),
    Album   = require("../models/album");
    
    
//**************
//add NEW COMMENT 
//**************

//render NEW ALBUM form
router.get("/new", function(req, res){
    Album.findById(req.params.id, function(err, foundAlbum){
        if(err){
            console.log(err);
        }else{
            // res.send("here we are")
           res.render("comments/new", {album: foundAlbum})
        }
    })
});

//NEW ALBUM logic
router.post("/", function(req, res){
    Album.findById(req.params.id, function(err, foundAlbum){
        if(err){
            console.log(err);
        }else{
            Comment.create(req.body.newComm, function(err, createdComm){
                if(err){
                    console.log(err);
                }else{
                    //add creator/user data to the comment
                    // createdComm.creator.username = req.user.username;
                    // createdComm.creator.id = req.user._id;
                    createdComm.save();
                    //add comment to Album
                    foundAlbum.comments.push(createdComm);
                    foundAlbum.save();

                    res.redirect("/albums/"+req.params.id);
                }
            });
        }
    });
});
    
module.exports = router;
    