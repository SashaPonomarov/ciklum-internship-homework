const express = require('express');
const path = require('path');
const passport = require('passport');
const User = require('../models/User.model');
const router = express.Router();


router.get('/', function (req, res, next) {
    if (req.user) {
        next();
    }
    else {
        res.redirect('/login');
    }
});

router.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/partials', 'register.html'));
});

router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.redirect('/register');
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/partials', 'login.html'));
});

router.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login' }));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/*', function(req, res, next) {
    if (req.user) {
        next();
    }
    else {
        res.redirect('/login');
    }
});

module.exports = router;