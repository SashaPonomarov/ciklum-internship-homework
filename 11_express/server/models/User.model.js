const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  password: String,
  favorites: [{
    imdbID: { type : String , unique : true },
    Title: String,
    Poster: String
  }]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);