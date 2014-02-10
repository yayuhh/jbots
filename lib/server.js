var Hapi = require('hapi');

module.exports = function(host,port,options) {
  return new Hapi.Server(host,port,options);
};
