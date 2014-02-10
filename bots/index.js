var bots = [
    require('./hello')
/*, add more bots here */
];

bots.forEach(function(bot) {
  bot.method = 'POST';
});

module.exports = bots;
