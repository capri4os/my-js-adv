const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    // res.end('Hello World!');

    // const body = fs.readFileSync('./index.html');
    // res.end(body);

    // const style = fs.readFileSync('./style.css');
    // res.end(style);

    // const scenario = fs.readFile('./server.js', 'utf8');
    // res.end(scenario);

    const publicPath = './';

    let body = null;

    try {
        body = fs.readFileSync(`${publicPath}${req.url}`);
    } catch (e) {
        console.log(e);
        body = fs.readFileSync(`${publicPath}index.html`)
    }
    res.end(body)
})

const port = process.env.PORT || 3000;
server.listen(port);

console.log(`Server started on port ${port}!`);