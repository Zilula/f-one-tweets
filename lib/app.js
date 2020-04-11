var express = require('express');
var app = express();
// eslint-disable-next-line no-unused-vars
var expressWs = require('express-ws')(app);
const f1 = require('./routes/f-one');
app.use(express.json());

app.ws('/api/v1/f1/max', f1.max);
app.ws('/api/v1/f1/lewis', f1.lewis);
app.ws('/api/v1/f1/general', f1.general);
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
