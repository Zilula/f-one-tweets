/* eslint-disable no-unused-vars */

const app = require('../app');
const expressWs = require('express-ws')(app);
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const controllerGen = async({ stream }) => {
  try {
    console.log(stream);
    const s = client.stream('statuses/filter', { track: stream.track });
    const fn = async(socket, req) => {
      s.on('data', function(event) {
        if(socket) {
          console.log(event && event.text);
          socket.send(event && event.text);
  
        }
      });
    };
    return fn();

  }
  catch(e) {
    console.log(e);
  }
};

module.exports = {
  controllerGen
};
