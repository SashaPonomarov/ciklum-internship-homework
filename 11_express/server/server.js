const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://login:password@url');


app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');

  app.listen(3000, function(){
    console.log('listening on 3000');
  })

  app.use('/api/movies', require('./routes/movies'));

});

