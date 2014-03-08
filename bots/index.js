var fs = require('fs');
var types = require('hapi').types;
var bots = fs.readdirSync(__dirname);

module.exports =
bots
  .filter(function(file) { return file.indexOf('index') != 0; })
  .map(function(file) {

    var config = require('./' + file.substring(0, file.length-3));

    // set default validations
    config.validate = config.validate || {
      payload: {
        token:        types.string().required(),
        team_id:      types.string().required(),
        channel_id:   types.string().required(),
        channel_name: types.string().required(),
        timestamp:    types.string(),
        user_id:      types.string().required(),
        user_name:    types.string().required(),
        text:         types.string().required(),
        command:      types.string()
      }
    }

    var bot = {
      path:   config.path,
      method: config.method || 'POST',
      config: config
    };

    // remove invalid keys from the `config` attribute
    delete config.path;
    delete config.method;

    return bot;
  });
