
// const cron = require('node-cron');
const app = require('../../app');
// eslint-disable-next-line no-unused-vars
const expressWs = require('express-ws')(app);
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
const stream = client.stream('statuses/filter', { track: 'f1' });

// eslint-disable-next-line no-unused-vars
const basic = async(socket, req) => {
  stream.on('data', function(event) {
    if(socket.readyState === socket.OPEN) {
      console.log(event && event.text);
      socket.send(event && event.text);
  
    }
  });
};

module.exports = {
  basic
};
