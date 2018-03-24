'use strict';

const toolz = require('./tools.js');

function reqLog(req, res, next) {
  toolz.serverLog(`${toolz.getIPaddress(req.ip)} ${req.method} ${req.url}`);
  next();
}

module.exports = {
  reqLog,
};