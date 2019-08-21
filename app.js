const express = require('express');
const path = require('path');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const config = require('./config/database');
const passport = require('passport');
const nodemailer = require('nodemailer');



//mongoose.connect(config.database);
////mongoose.connect(config.database, { useNewUrlParser: true });
//let db = mongoose.connection;



////Check connection
//db.once('open', function(){
//    console.log('Connected to MongoDB');
//});

////Check for DB errors
//db.on('error', function(err){
//    console.log(err);
//});

const app = express();

//Bring in Modules
let Article = require('./models/article');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));


//Express Session MiddLeware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

// Express Messages MiddLeware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();

});

//Express Validator MiddLware

app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;

        while(namespace.length){
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg : msg,
            value : value
        };

    }
}));

//Passport Config
require('./config/passport')(passport);
// Passport MiddLeware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function (req, res, next) {
    res.locals.user = req.user || null;
    next();
});


//Home Route
app.get('/', function(req, res) {
  
            res.render('main',{
                title:'Main',
				lang: req.params.lang,
              
            });

});

app.get('/main/:lang', function (req, res) {
    res.render('main',{
        title: 'Main',
        lang: req.params.lang
    });
});


app.get('/photo/:lang', function (req, res) {
    res.render('photo',{
        title: 'Portrait',
        lang: req.params.lang
    });
});

app.get('/travel/:lang', function (req, res) {
    res.render('travel',{
        title: 'Travel',
        lang: req.params.lang
    });
});

app.get('/events/:lang', function (req, res) {
    res.render('events',{
        title: 'Events',
        lang: req.params.lang
    });
});

/*
app.get('/photo/:lang/:id', function (req, res) {
    res.render('photo',{
        title: 'Photo',
        lang: req.params.lang,
        locat: req.params.id
    });
});*/

app.get('/video/:lang', function (req, res) {
    res.render('video',{
        title: 'Video',
        lang: req.params.lang
    });
});

app.get('/contact/:lang', function (req, res) {
    //console.log(req.params.lang);
    //req.flash('success', 'Article Updated');
    res.render('contact',{
        title: 'Contact',
        lang: req.params.lang
    });
});

app.post('/contact/:lang', function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const lastname = req.body.lastname;
    const subject = req.body.subject;
    const phone = req.body.phone;

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'denisgrytchuk97@gmail.com',
            pass: '******'
        }
    });

    var mailOptions = {
        from: 'denisgrytchuk97@gmail.com',
        to: 'dykyjhutsul@gmail.com',
        subject: '[From your site]',
        //text: "Hi! My name is " + name + lastname + "<br> " + subject + "<br> My phone:" + phone + "<br> My email:" + email,
        html: "Hi! My name is " + name + lastname + "<br> " + subject + "<br> My phone:" + phone + "<br> My email:" + email
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            req.flash('success','Емеїл надісланий');
            res.redirect('/contact/'+ req.params.lang);
            console.log('Email sent: ' + info.response);
        }
    });


});

//Route Files
let articles = require('./router/article');
let users = require('./router/user');
app.use('/articles',articles);
app.use('/users',users);


//Start Server
app.listen(3000, function () {
    console.log('Server started on port 3000...');
});