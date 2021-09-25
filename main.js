const http = require('http');

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    let parsedURL = new URL(req.url, `http://${req.headers.host}/`)
    console.log(parsedURL)
})

server.listen(port, () => {
    console.log('listening at port 8080')
})