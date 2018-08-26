var express       = require("express"),
    app           = express(),
    mongoose      = require("mongoose"),
    IndexRoutes   = require("./routes/index.js");
    
    
    
    
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/theMusic", { useNewUrlParser: true });



app.use(IndexRoutes);

app.listen(process.env.PORT, process.env.ID, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("theMusic app server works");
    }
})