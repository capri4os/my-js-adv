const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello World!');

    const page = fs.readFileSync('./index.html');
    res.end(page);

    const style = fs.readFileSync('./style.css');
    res.end(style);

    const scenario = fs.readFile('./server.js');
    res.end(scenario);
})

server.listen(process.env.PORT || 3000);

console.log('Server started');