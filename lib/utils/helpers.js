/* eslint-disable no-unused-vars */

const cron = require('node-cron');
const { includes, toLower, filter } = require('lodash');






const parser = (msg) => {
  const data = msg.split(' ');
  const message = data.join(' ');

  if(msg.includes('f1')) {
    console.log('fires');
    return { driver: 'max', tweet: message };
  }
  if(includes(msg, 'F1')) {
    console.log('fires 22');
    return { driver: 'lewis', tweet: message };
  }

  return { driver: 'general', tweet: message };
};

module.exports = {
  parser
};
