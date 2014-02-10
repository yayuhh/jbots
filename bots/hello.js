module.exports = {
  path:    '/hello',
  handler: function(request,reply) {
    var slackData = request.payload;

    if (   slackData.text
        && slackData.text.match(/hello/)) {

      reply({
        "text": "Hello.",
        "username": "jbot"
      });
    
    } else { reply().code(204); }

  }
}
