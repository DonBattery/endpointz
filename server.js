const app = require('./app').app;
const toolz = require('./tools/tools.js');
const PORT = (process.env.APP_PORT || 9292);

app.listen(PORT, toolz.startMessage('Test', PORT));
