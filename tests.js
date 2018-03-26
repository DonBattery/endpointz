'use strict';

const getEnv = require('./tools/envservice').getEnv;

const test = require('tape');

test('Envservice test', function (t) {
  t.same({}, getEnv({}), 'getEnv with an empty connObj');

  t.same({ host: 'a', port: 1111, user: 'b', password: 'c', database: 'd' },
  getEnv({host: 'a', port: 1111, user: 'b', password: 'c', database: 'd'}), 'getEnv with a custom connObj');

  t.same({
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE
    }, getEnv(), 'getEnv with actual Environment Variables');

  t.end();
});
