const http = require('http');
const app = require('./app');
const port = 801;

http.createServer(app).listen(port, '0.0.0.0', () => {
    // 终端打印如下信息
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
