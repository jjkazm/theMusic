var express = require("express"),
    router  = express.Router();
    
    router.get("/", function(req, res){
        res.send("landing page loaded");
    });
    
    
module.exports = router;