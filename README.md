## Node.js Express Endpointz
Basic midleware collection for the Express web-framework

Usage:
```JavaScript
  const endpointz = require('./endpointz');
  
  app.use(endpointz.reqLog);  
```

#### reqLog
This will log onto the console the time, method, URL and IP of every request
