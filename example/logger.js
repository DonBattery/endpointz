// an example app demonstrating the usage of the logger middleware

'use strict';

const express = require('express');
const app = express();
const PORT = (process.argv[2] || 8080);
const serverName = (process.argv[3] || 'Test');
const logger = require('endpointz').reqLog;
const serverLog = require('endpointz').serverLog;
const startMessage = require('endpointz').startMessage;

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hi');
  serverLog('Hi from log');
});

app.listen(PORT, startMessage(serverName, PORT));
