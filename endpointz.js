'use strict';

const serverLog = require('./tools').serverLog;
const startMessage = require('./tools').startMessage;
const getIPaddress = require('./tools').getIPaddress;

function reqLog(req, res, next) {
  serverLog(`Request from: ${getIPaddress(req.ip)} ${req.method} ${req.url}`);
  next();
}

module.exports = {
  reqLog,
  serverLog,
  startMessage,
};