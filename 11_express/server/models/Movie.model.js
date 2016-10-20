const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  Title: String,
  Year: String,
  imdbID: { type : String , unique : true },
  Type: String,
  Plot: String,
  Poster: String,
  fromCache: Boolean,
  comments: [
    {
      name: String,
      text: String,
      date: {type: Date, default: Date.now}
    }
  ]
});

module.exports = mongoose.model('Movie', MovieSchema);