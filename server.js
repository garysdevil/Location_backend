const http = require('http');
const { spawn } = require('child_process');

const app = require('./app');

const port = 801;
const apidoc = () => {
    const child = spawn('npm', ['run', 'apidoc']);
    child.stdout.on('data', data => {
        console.log(`stdout: ${data}`);
    });
    child.stderr.on('data', data => {
        console.log(`stderr: ${data}`);
    }, { message: 'Done.', level: 'trace' });
    child.on('close', code => {
        if (code === 0) {
            console.log('generate apidoc success');
        } else {
            console.log('generate apidoc unsuccess');
        }
    });
};
http.createServer(app).listen(port, '0.0.0.0', () => {
    // 终端打印如下信息
    console.log(`Server running at http://127.0.0.1:${port}/`);
    apidoc();
});
