const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello World!');
    const body = fs.readFileSync('./index.html');
    res.end(body);
})
server.listen(process.env.PORT || 3000);
console.log('Server started');