const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  Title: String,
  Year: String,
  imdbID: { type : String , unique : true },
  Type: String,
  Poster: String,
  fromCache: Boolean,
  comments: [
    {
      username: String,
      comment: String
    }
  ]
});

module.exports = mongoose.model('Movie', MovieSchema);