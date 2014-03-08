module.exports = {
  path:    '/hello',
  handler: function(request, reply) {

    // Slack Payload Cheatsheet
    // {
    //   token:        "9itBZe5CqNXUsqh3RXACsfqb"
    //   team_id:      "T0001"
    //   channel_id:   "C2147483705"
    //   channel_name: "test"
    //   timestamp:    "1355517523.000005"
    //   user_id:      "U2147483697"
    //   user_name:    "Steve"
    //   text:         "googlebot: What is the air-speed velocity of an unladen swallow?"
    // }
    var msg = request.payload;

    // Suppose you only want to respond to messages that match a certain criteria
    if (msg.text.match(/\bhello\b/)) {

      // Empty bodies or bodies with an empty text property will
      // simply be ignored.
      var body = 'Herrrro there!';

      // Non-200 responses will be retried a reasonable number of times.
      var status = 200;

      // If you would like to change the name on a per-response basis,
      // simply include a `username` property in your response.
      var username = 'hello-bot';

      // Respond back to Slack
      reply({
        'text':     body,
        'username': username
      }).code(status);

    } else {

      // This is not the msg you're looking for.
      reply().code(204);
    }
  }
};
