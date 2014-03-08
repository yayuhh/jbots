![jbots](http://1.bp.blogspot.com/-1czUXZDCNdU/TXRl_Q9FIAI/AAAAAAAAATQ/U1a-tKrH2YA/s1600/jbots2011_header.jpg)

## what can I do with jbots?
+ [Outgoing WebHooks](https://archer.slack.com/services/new/outgoing-webhook)
+ [Slash Commands](https://archer.slack.com/services/new/slash-commands)
+ *or write a little code and [do many other things](https://archer.slack.com/services/new)*


## how to jbot
1. fork/clone jbots
2. duplicate `./bots/hello.js`, renaming as appropriate
3. implement your bot logic
4. git commit && git push to your deployment center of choice
  + Heroku should *just work* given the bundled package.json + Procfile
5. configure Slack integrations to send events to your bots however it makes sense to you


## slack cheat sheet (for convenience)

### request.payload
```javascript
{
  token:        "9itBZe5CqNXUsqh3RXACsfqb"
  team_id:      "T0001"
  channel_id:   "C2147483705"
  channel_name: "test"
  timestamp:    "1355517523.000005"
  user_id:      "U2147483697"
  user_name:    "Steve"
  text:         "googlebot: What is the air-speed velocity of an unladen swallow?"
}
```
> For more information on how messages are formatted in Slack, please consult their [API docs](https://api.slack.com/docs/formatting).

### expected reply(payload)
```javascript
  {
    "text": "Hello.",
    "username": "jbot"
  }
```
