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

const max = async(socket, req) => {
  const stream = client.stream('statuses/filter', { follow: '556260847' });
  stream.on('data', (event) => {
    if(socket.readyState === socket.OPEN) {
      socket.send(event && event.text);
  
    }
  });
};
const lewis = async(socket, req) => {
  const stream = client.stream('statuses/filter', { follow: '213969309' });
  stream.on('data', (event) => {
    if(socket.readyState === socket.OPEN) {
      socket.send(event && event.text);
  
    }
  });
};
const general = async(socket, req) => {
  try {
    const stream = client.stream('statuses/filter', { track: 'f1' });
    stream.on('data', (event) => {
      if(socket.readyState === socket.OPEN) {
        socket.send(event && event.text);
  
      }
    });
  }
  catch(e) {
    console.log(e);
  }
};

module.exports = {
  max,
  lewis,
  general,
};
