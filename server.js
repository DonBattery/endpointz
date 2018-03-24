const toolz = require('./tools.js');
const express = require('express');
const heart = require('huli-heartbeat');
const endpointz = require('./endpointz');

const app = express();

const PORT = 7373;

app.use(endpointz.reqLog);

app.use(heart.endpoint);

app.get('/', function (req, res) {
  res.send('Geccó');
})
 
app.listen(PORT, () => {
  toolz.serverLog(`Test Server listening on PORT ${PORT}`);
});