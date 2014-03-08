var test = require('tape');
var server = require('../lib/server')('0.0.0.0', 0);
var bots = require('../bots');

test('server initializes and starts appropriately', function (t) {
  t.plan(2);

  server.route(bots);
  server.start(function() {

    t.pass('server started');
    server.stop(function(){

      t.pass('server stopped');
    });
  });
})
