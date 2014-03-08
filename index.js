var serverOptions = ('0.0.0.0', parseInt(process.env.PORT) || 3000);
var server = require('./lib/server')(serverOptions);
var bots = require('./bots');

server.route(bots);

server.start(function() {
  console.log('jbots started at: ' + server.info.uri);
});
