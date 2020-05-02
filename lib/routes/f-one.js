/* eslint-disable no-unused-vars */
const app = require('../app');
const expressWs = require('express-ws')(app);
const Twitter = require('twitter');
const cron = require('node-cron');
const { parser } = require('../utils/helpers');


const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const streamData = { track: 'f1', id: 1 };

const tweetData = {
  max: {},
  lewis: {},
  general: {}
};
const s = client.stream('statuses/filter', { track: streamData.track });
s.on('data', (tweet) => {
  const parsedTweet = parser(tweet.text);
  if(parsedTweet) {
    tweetData[parsedTweet.driver].msg = parsedTweet.tweet;
    tweetData[parsedTweet.driver].driver = parsedTweet.driver;
  }

});
const general = async(socket, req) => {
  try {

    setInterval(() => {
      if(socket.readyState === socket.OPEN) {
        socket.send(JSON.stringify(tweetData.general));
      }
    }, 1000);
  }
  catch(e) {
    // throw new Error(e);
  }
};

module.exports = {

  general,
};
