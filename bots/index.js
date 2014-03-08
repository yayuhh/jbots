var fs   = require('fs');
var bots = fs.readdirSync(__dirname);

module.exports =
bots
  .filter(function(file) { return file.indexOf('index') != 0; })
  .map(function(file) {

    var bot = require('./' + file.substring(0, file.length-3));
    bot.method = bot.method || 'POST';
    return bot;
  });
