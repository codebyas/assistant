'use strict';

var AssistantV1 = require('watson-developer-cloud/assistant/v1');

var assistant = new AssistantV1({
  username: '19231ea5-8dfa-496d-a636-349db8afea00',
  password: 'UdYEyeTIVbUY',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-02-16'
});

var lastContext

exports.getResponse = function(message,callback) {

    if (message.length == 0) {
        lastContext = undefined
    }

    assistant.message(
        {
          input: { text: message },
          workspace_id: 'c0473fc7-21e2-4f40-9ffd-3854377e2242',
          context: lastContext
        },
        function(err, response) {
          if (err) {
            console.error(err);
          } else {
            lastContext = response.context;
            callback({'text':response.output.text[0]});
          }
        }
      );
};