const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const config = require('./config');

const app = express();

mongoose.connect(config.db.setting());
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: false}));

app.use(passport.initialize());
app.use(passport.session());

// passport config
var User = require('./models/User.model');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');

  app.listen(3000, function(){
    console.log('listening on 3000');
  })

  app.use('/', require('./routes/login'));
  app.use('/api/movies', require('./routes/movies'));
  app.use('/api/user', require('./routes/user'));

  app.use(express.static(__dirname + '/public'));

});

