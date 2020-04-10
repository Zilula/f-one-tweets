var express = require('express');
var app = express();
// eslint-disable-next-line no-unused-vars
var expressWs = require('express-ws')(app);

app.use(express.json());

app.ws('/api/v1/tweets', require('./routes/f-one'));
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
