
// var cron = require('node-cron');
var app = require('../../app');
var expressWs = require('express-ws')(app);


let i = 0;
const basic = async(socket, req) => {
  setInterval(() =>{
    i = i + 1;
    socket.send('fuck yea' + i);

  }, 500);

};

module.exports = {
  basic
};
