var express       = require("express"),
    app           = express(),
    mongoose      = require("mongoose"),
    Album         = require("./models/album"),
    User          = require("./models/user"),
    Comment       = require("./models/comment"),
    AlbumRoutes   = require("./routes/albums"),
    IndexRoutes   = require("./routes/index"),
    CommRoutes    = require("./routes/comments"),
    bodyParser    = require("body-parser"),
    methodOverride= require("method-override"),
    passport      = require("passport"),
    LocalStrategy = require("passport-local"),
    passLocalMong = require("passport-local-mongoose"),
    expressSession= require("express-session");
    
    
    
    
app.use(bodyParser.urlencoded({extended: true}));  
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//connecting mongodb and mongoose
//mongoose.connect("mongodb://kajetan88:haslo88@ds235022.mlab.com:35022/themusic", { useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/theMusic", {useNewUrlParser: true});


//***********************************************
//configuring PASSPORT authentication
//***********************************************
app.use(expressSession({
    secret:"Agatka is best",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//setting RESPONSE LOCAL VARIABLES
app.use(function(req, res, next){
    res.locals.loggedUser = req.user;
    next();
});


//***********************************************
//setting up ROUTES
//***********************************************

//setting RESPONSE LOCAL VARIABLES
app.use(function(req, res, next){
    res.locals.loggedUser = req.user;
    next();
});

app.use(IndexRoutes);
app.use("/albums", AlbumRoutes);
app.use("/albums/:id/comments", CommRoutes);




app.listen(process.env.PORT, process.env.ID, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("theMusic app server works");
    }
})