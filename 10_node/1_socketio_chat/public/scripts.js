var socket = io();

$('.login form').submit(function(e){
  socket.emit('new user', $('#username').val(), function(data){
    if (data.login) {
      data.messages.map((message) => {
        addMessage(message);
      })
      $('.login').hide();
      $('.chat').show();
    } else {
      $('.login').append($('<p>').text(data.error));
    }
  });
  $('#username').val('');
  return false;

});


$('.chat form').submit(function(e){
  socket.emit('message', $('#message').val(), function(data) {
    if (data) {
      addMessage(data, true)
    }
  });
  $('#message').val('');
  return false;
});


socket.on('update users', function(users){
  $('.users li').remove();
  users.map((user) => {
    $('.users').append($('<li>').text(user));
  })
});

socket.on('message', function(data){
  addMessage(data);
});

function addMessage(data, self) {
  var timestamp = new Date(data.timestamp).toLocaleString();
  var message = `<li class="message ${self ? 'message-self' : ''}">
                  <h1>${self ? '' : data.user + ':'}</h1>
                  <div class="message-text">${data.msg}</div>
                  <span class="timestamp">${timestamp}</span>
                </li>`;
  $('.messages').append(message);
  $("html, body").scrollTop( $(document).height() );
}