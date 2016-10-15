const fs = require('fs');

const storage = { 
  readMessages: function() {
    return new Promise (function(resolve, reject) {
      fs.readFile('./storage/messages.json', 'utf8', function(err, data){
        if (err){
          console.log(err);
          reject(err);
        } else {
          var messages;
          if(data) {
            messages = JSON.parse(data);
          } else {
            messages = [];
          }
          resolve(messages);
        }
      });
    })
  },
  saveMessages: function(messages) {
    json = JSON.stringify(messages);
    fs.writeFile('./storage/messages.json', json, 'utf8', function(err) {
      if (err) {
        console.log(err);
      }
    }); 
  }
}

module.exports = storage;