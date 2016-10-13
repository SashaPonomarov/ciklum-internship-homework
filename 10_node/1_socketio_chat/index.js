var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var connections = [];
var users = [];
var log = [];
var messages = [];


app.use(express.static('public'));


io.on('connection', function(socket){
  connections.push(socket);
  console.log('new connection, ' + connections.length + ' connected');
  
  socket.on('disconnect', function(){
    if (socket.username) {
      users.splice(users.indexOf(socket.username), 1);
      io.emit('update users', users);
      console.log('user ' + socket.username + ' has disconnected, ' + users.length + ' users left')
    }
    connections.splice(connections.indexOf(socket), 1)
    console.log('disconnected, ' + connections.length + ' connected');
  });

  socket.on('new user', function(username, callback){
    if (!username) {
      callback({login: false, 
                error: 'Please provide username'
              });
      return
    }

    if (users.length >= 5) {
      console.log('denied new user')
      callback({login: false, 
                error: 'too many users, please wait until some of them exhaust their eloquence'
              });
      return;
    }
    callback({login: true, messages: messages});
    socket.username = username;
    users.push(username);
    io.emit('update users', users);
    console.log('user ' + socket.username + ' connected, ' + users.length + ' users now')
  });

  socket.on('message', function(msg, callback){
    if (msg) {
      var message = { msg: msg, user: socket.username, timestamp: new Date().getTime() };
      messages.push(message);
      socket.broadcast.emit('message', message);
      callback(message);
    }
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
