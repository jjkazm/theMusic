var express       = require("express"),
    app           = express(),
    IndexRoutes   = require("./routes/index.js");
    
    
    
    
app.set("view engine", "ejs");




app.use(IndexRoutes);

app.listen(process.env.PORT, process.env.ID, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("theMusic app server works");
    }
})