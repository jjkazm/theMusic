var express = require("express"),
    router  = express.Router(),
    Album   = require("../models/album");
    
    
    
//show all the albums    
router.get("/", function(req, res){
    Album.find(function(err, albums){
        if(err){
            console.log(err);
        }else{
          res.render("albums/index", {albums:albums});  
        }
    });
});

//**************
//add NEW ALBUM 
//**************

//render NEW ALBUM form
router.get("/new", function(req, res){
    res.render("albums/new");
});

//NEW ALBUM logic
router.post("/", function(req, res){
    console.log(req.body.newAlbum)
    Album.create(req.body.newAlbum, function(err, createdAlbum){
        if(err){
            console.log(err);
        }else{
            res.redirect("albums/"+createdAlbum.id);
        }
    });
});

//**************
//SHOW ALBUM 
//**************
router.get("/:id", function(req, res){
    Album.findById(req.params.id, function(err, foundAlbum){
        if(err){
            console.log(err);
        }else{
           res.render("albums/show", {album: foundAlbum}); 
        }
    });
})

module.exports = router;


//**************
//DELETE ALBUM 
//**************
router.delete("/:id", function(req, res){
    Album.findByIdAndRemove(req.params.id, function(err, deletedAlbum){
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    });
})