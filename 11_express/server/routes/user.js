const express = require('express');
const User = require('../models/User.model');
const router = express.Router();

router.get('/', function(req, res) {
  res.json({user: req.user});
});

router.get('/favorites', function(req, res) {
    if (req.user) {
        return res.json({favorites: req.user.favorites});
    }
    else {
        return res.status(404).end();
    }
});

router.post('/favorites', function(req, res) {
  if (!req.body.favorites) {
    return res.status(400).end();
  }
  User.findByIdAndUpdate(
    req.user._id, 
    {$set: {"favorites": req.body.favorites}},
    {new: true, safe: true},
    function(err, user) {
    if (err) {console.log(err);}
    else {res.json(user);
    }
  });
});


module.exports = router;