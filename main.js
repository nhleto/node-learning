const http = require('http')

const port = process.env.port || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/hmtl')
})

server.listen(port, () => {
    console.log('server running at {port}', 3000)
})