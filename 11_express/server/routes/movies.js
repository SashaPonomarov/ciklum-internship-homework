const express = require('express');
const request = require('request');
const Movie = require('../models/Movie.model');
const router = express.Router();

router.get('/search', function (req, res) {
  if (!req.query.s) {
    return res.status(400).end();
  }
  var type = req.query.type || '';
  var y = req.query.y || '';
  var page = req.query.page || 1;

  var requestURL = `http://www.omdbapi.com/?s=${req.query.s}&type=${type}&y=${y}&page=${page}`;
  request(requestURL, function (error, response, body) {
    if (error) {
      return res.status(400).json({Error: error, Response: false});
    }
    var movies = JSON.parse(body);
    if (movies.Error) {
      return res.status(404).json({Error: movies.Error, Response: false});
    }
    res.json(movies);
  });
});

router.get('/:imdbID', function (req, res) {
  var imdbID = req.params.imdbID;
  Movie.findOne({imdbID: imdbID}, function(err, movie) {
    if (err) return console.log(err);
    if (movie) {
      movie.fromCache = true;
      return res.json(movie);
    }
    var requestURL = `http://www.omdbapi.com/?i=${imdbID}&plot=full`;
    request(requestURL, function (error, response, body) {
      if (error) {
        return res.status(400).json({Error: error, Response: false});
      }
      var movie = JSON.parse(body);
      if (movie.Error) {
        return res.status(404).json({Error: movie.Error, Response: false});
      }
      Movie.create(movie, function(err, savedMovie) {
        if (err) return console.log(err);
        return res.json(savedMovie);  
      }) 
    });
  })

});


router.post('/', function (req, res) {
  if (!req.body.imdbID) {
    return res.status(400).end();
  }
  Movie.findOneAndUpdate(
      {imdbID: req.body.imdbID}, 
      {$push: {"comments": req.body.comment}},
      {new: true, safe: true},
      function(err, movie) {
        if (err) {console.log(err);}
        else {res.json(movie);
      }
  });
})


module.exports = router;