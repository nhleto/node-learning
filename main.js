const http = require('http');

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    let parsedURL = new URL(req.url, `http://${req.headers.host}/`)
    console.log(parsedURL)
    
    res.write(`<h1>Welcome to the internet</h1>`)
    res.end()
})

server.listen(port, () => {
    console.log('listening at port 8080')
})

const routes = {
    index: () => {
        
    }
}