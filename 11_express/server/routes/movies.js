const express = require('express');
const request = require('request');
const Movie = require('../models/Movie.model');
const router = express.Router();

router.get('/', function (req, res) {
  Movie.find({})
    .exec(function(err, movies) {
      if(err) {
        res.send('error' + err);
      } else {
        console.log(movies);
        res.json(movies);
      }
    });
  // res.sendFile(__dirname + '/index.html');
})

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
    var requestURL = `http://www.omdbapi.com/?i=${imdbID}`;
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

router.get('/test/:imdbID', function (req, res) {
  Movie.findOne({imdbID: req.params.imdbID}, function(err, movie) {
    if (err) {console.log(err);}
    else {res.json(movie);}
  })
  // request('http://www.omdbapi.com/?s=terminator', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     var movies = JSON.parse(body).Search || [];
  //     movies.map(function(item){
  //       var movie = new Movie(item);
  //       movie.save(function(err, movie){
  //         if (err) return console.log(err);
  //         console.log('save movie ', movie.Title);
  //       });
  //     })
  //     res.json(body);
  //   }
  // })
})

module.exports = router;