![jbots](https://raw.github.com/jmonster/jbots/master/lib/jbot.png)

[![Build Status](https://travis-ci.org/yayuhh/jbots.svg?branch=master)](https://travis-ci.org/yayuhh/jbots)


## what can I do with jbots?
+ [Outgoing WebHooks](https://slack.com/services/new/outgoing-webhook)
+ [Slash Commands](https://slack.com/services/new/slash-commands)
+ *or write a little code and [do many other things](https://slack.com/services/new)*


## how to jbot
1. fork/clone jbots
2. duplicate or replace `./bots/hello.js`
3. implement your custom bot logic
4. git commit && git push to your deployment center of choice
  + Heroku should *just work* given the bundled package.json + Procfile
5. configure Slack integrations to send events to your bots however it makes sense to you


## slack cheat sheet

### request.payload
```javascript
{
  token:        "9itBZe5CqNAOEQP3RXACsfqb"
  team_id:      "T0001"
  channel_id:   "C4815162342"
  channel_name: "test"
  timestamp:    "1355517523.000005"
  user_id:      "U4128675309"
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
