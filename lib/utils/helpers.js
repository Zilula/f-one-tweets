/* eslint-disable no-unused-vars */

const app = require('../app');
const expressWs = require('express-ws')(app);
const Twitter = require('twitter');
var cron = require('node-cron');


const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


const streamGenerator = async({ stream }) => {
  try {
    console.log(stream);
    const s = await client.stream('statuses/filter', { track: stream.track });

    

    cron.schedule('* * * * *', () => {
      console.log('running a task every minute');
    });

  }
  catch(e) {
    console.log(e);
  }
};

module.exports = {
  streamGenerator
};
