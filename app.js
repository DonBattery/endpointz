const toolz = require('./tools/tools');
const express = require('express');
const heart = require('huli-heartbeat');
const endpointz = require('./tools/endpointz');

const app = express();

const PORT = 7373;

app.use(endpointz.reqLog);

app.use(heart.endpoint);

app.get('/', function (req, res) {
  res.send('Geccó');
})

module.exports = {
  app
}