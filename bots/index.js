var fs   = require('fs');
var bots = fs.readdirSync(__dirname);

bots = bots
  .filter(function(file) {
    return file.indexOf('index') != 0;
  })
  .map(function(file) {
    var bot = require('./' + file.substring(0,file.length-3));
    bot.method = bot.method || 'POST';
    return bot;
  });

module.exports = bots;
