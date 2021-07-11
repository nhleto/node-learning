const http = require('http')
var fs = require('fs');


http.createServer(function(req, res) {
  fs.appendFile('demofile.html', 'Hello Content', (err) => {
    if (err) throw err
    console.log('Saved!')
  })
})
