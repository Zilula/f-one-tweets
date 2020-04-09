// const WebSocket = require('ws');
// var cron = require('node-cron');

// const map = {
//   1: { clients: [], fetch: () => ({ tweet: 'HI HI' }) }
// };
// // cron.schedule('* * * * *', () => {
// //   console.log('running every minute');
// //   value += ', x';
// //   map(map, feed => {
// //     ws.send(JSON.stringify({ ...feed.fetch() }));
// //   });
// //   ws.send('SOMETHING');
// //   ws.send(JSON.stringify({ message: value }));
// // });

// const wss = new WebSocket.Server({ port: 7890 });
// const sockets = map(map, stream)

// wss.on('connection',  (ws) => {

//   ws.on('message', (message) => {
//     const { streamId, clientId } = JSON.parse(message);
//     const streamData = map[streamId];
//     if(!streamData) return;
//     if(!streamData.clients.includes(clientId)) {
//       return map[streamId].clients.push(clientId);
//     }
//     const index = streamData.clients.indexOf(clientId);
//     return map[streamId].clients.splice(index, 1);
//   });

//   ws.send('Default Message');
// });


const WebSocket = require('ws');
const _ = require('lodash');
var cron = require('node-cron');

const map = {
  1: { clients: [], fetch: () => ({ tweet: 'HI HI' }) }
};

const sockets = _.map(map, streamMetaData => {
  const wss = new WebSocket.Server({ noServer: true });

  wss.on('connection',  (ws) => {
    ws.on('message', (message) => {
      const { streamId, clientId } = JSON.parse(message);
      const streamData = map[streamId];

      if(!streamData) return;

      if(!streamData.clients.includes(clientId)) {
        return map[streamId].clients.push(clientId);
      }
      const index = streamData.clients.indexOf(clientId);
      return map[streamId].clients.splice(index, 1);

    });
    ws.send('Default Message');
    cron.schedule('* * * * *', () => {
      console.log('running every minute');
      let value = 'some value';
      _.map(map, feed => {
        ws.send(JSON.stringify({ ...feed.fetch() }));
      });
      ws.send('SOMETHING');
      ws.send(JSON.stringify({ message: value }));
    });
  });
  return wss;
});

console.log(sockets);

const PORT = process.env.PORT || 7890;

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection',  (ws) =>{
  ws.on('message', (message) => {
    const { streamId, clientId } = JSON.parse(message);
    const streamData = map[streamId];
    if(!streamData) return;
    if(!streamData.clients.includes(clientId)) {
      return map[streamId].clients.push(clientId);
    }
    const index = streamData.clients.indexOf(clientId);
    return map[streamId].clients.splice(index, 1);
    console.log('received: %s', message);
  });

  ws.send('fuck');
});








