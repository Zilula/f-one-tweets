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

const streamData = [{ track: 'paradisegreenmangos', id: 1 }, { follow: '213969309', id: 2 }, { track: 'paradisegreenmangos', id: 3 }];

const streams = streamData.map((stream, i)  => {
  const s = client.stream('statuses/filter', { track: stream.track || stream.follow });
  s.on('data', (event) => {
    streamData[i].event = event;
  });
});


const max = async(socket, req) => {
  try {
    if(socket.readyState === socket.OPEN) {
      const stream = streamData.find(s => s.id == 1);
      socket.send(stream.event && stream.event.text);
  
    }
  }
  catch(e) {
    throw new Error(e);
  }
};
const lewis = async(socket, req) => {
  try {
    if(socket.readyState === socket.OPEN) {
      const stream = streamData.find(s => s.id == 2);
      socket.send(stream.event && stream.event.text);
  
    }
  }
  catch(e) {
    throw new Error(e);
  }
};
const general = async(socket, req) => {
  try {
    if(socket.readyState === socket.OPEN) {
      const stream = streamData.find(s => s.id == 3);
      socket.send(stream.event && stream.event.text);
  
    }
  }
  catch(e) {
    throw new Error(e);
  }
};

module.exports = {
  max,
  lewis,
  general,
};
