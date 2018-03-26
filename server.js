const app = require('./app').app;
const start = require('./tools/tools.js').startMessage;
const PORT = (process.env.APP_PORT || 9292);

app.listen(PORT, start('Test', PORT));
