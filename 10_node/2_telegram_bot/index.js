require('newrelic');

var TelegramBot = require('node-telegram-bot-api');
var math = require('mathjs');

var token = process.env.TELEGRAM_TOKEN;
var port = process.env.PORT;

var bot = new TelegramBot(token, {webHook: { port }, polling: true});


bot.on('message', function (msg) {
  var fromId = msg.from.id;
  var input = msg.text || '';
  var response;
  if (!input.match(/[^-+/*0-9. ()]/g)) {
    input = input.replace(/\*\*/g, '^')
    try {
      response = math.format(math.eval(input), {precision: 14});
    }
    catch (e) {
      response = 'Oops, there is an error in your expression: ' + e;
    }
  }
  else {
    response = 'Please send correct input: only +-*/() ** symbols and numbers';
  }
  bot.sendMessage(fromId, response);
});