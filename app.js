var express       = require("express"),
    app           = express(),
    mongoose      = require("mongoose"),
    Album         = require("./models/album"),
    User          = require("./models/user"),
    AlbumRoutes   = require("./routes/albums"),
    bodyParser    = require("body-parser"),
    IndexRoutes   = require("./routes/index");
    
    
    
app.use(bodyParser.urlencoded({extended: true}));  
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//connecting mongodb and mongoose
//mongoose.connect("mongodb://localhost:27017/theMusic", { useNewUrlParser: true });
mongoose.connect("mongodb://kajetan88:haslo88@ds235022.mlab.com:35022/themusic", { useNewUrlParser: true });



app.use(IndexRoutes);
app.use("/albums", AlbumRoutes);

app.listen(process.env.PORT, process.env.ID, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("theMusic app server works");
    }
})