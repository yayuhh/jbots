module.exports = {
  path:    '/hello',
  handler: function(request, reply) {

    var msg = request.payload;

    // Suppose you only want to respond to messages that match a certain criteria
    if (   msg.text
        && msg.text.match(/\bhello\b/)) {

      // Empty bodies or bodies with an empty text property will
      // simply be ignored.
      var body = 'Herrrro there!';

      // Non-200 responses will be retried a reasonable number of times.
      var status = 200; 

      // If you would like to change the name on a per-response basis,
      // simply include a `username` property in your response.
      var username = 'hello-bot';

      // Respond to Slack
      reply({
        'text':     body,
        'username': username
      }).code(status);
    
    } else { 

      // We're not interested in this event.
      reply().code(204);
    }
  }
};
