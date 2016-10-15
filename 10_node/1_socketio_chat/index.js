var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var storage = require('./storage');

var connections = [];
var users = [];
var log = [];
var messages = [];

storage.readMessages().then(function(data){
  messages = data;
});

app.use(express.static('public'));


io.on('connection', function(socket){
  connections.push(socket);
  
  socket.on('disconnect', function(){
    if (socket.username) {
      users.splice(users.indexOf(socket.username), 1);
      io.emit('update users', users);
      console.log('user ' + socket.username + ' has disconnected, ' + users.length + ' users left in chat')
    }
    connections.splice(connections.indexOf(socket), 1);
  });

  socket.on('new user', function(username, callback){
    if (!username) {
      callback({login: false, 
                error: 'Please provide username'
              });
      return
    }
    if (users.length >= 5) {
      callback({login: false, 
                error: 'too many users, please wait until some of them exhaust their eloquence'
              });
      return;
    }
    callback({login: true, messages: messages});
    socket.username = username;
    users.push(username);
    io.emit('update users', users);
    console.log('user ' + socket.username + ' has connected, ' + users.length + ' users now in chat')
  });

  socket.on('message', function(msg, callback){
    if (msg) {
      var message = { msg: msg, user: socket.username, timestamp: new Date().getTime() };
      messages.push(message);
      storage.saveMessages(messages);
      socket.broadcast.emit('message', message);
      callback(message);
    }
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
