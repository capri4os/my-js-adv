const http = require('http')

const server = http.createServer((req, res)) => {
    console.log(req.url)
    const body = req.url === '/style.css'
        ? fs.readFileSync('.style.css')
        : fs.readFileSync('.index.html')
    // const body = fs.readFileSync('index.html')
    // console.log('Hello world')
    res.end(body)
})

const port = process.env.PORT || 3000
server.listen(port)

console.log('Server started!')