var port = 3000
var express = require('express')
var app = express()

app.get('/timestamp', function (req, res) {
  res.send('' + Date.now())
})

app.get('/getRandom', function (req, res) {
  res.send('' + Math.random())
})

app.get('/', function (req, res) {
  res.send('hello world')
})

// Start the server
app.listen(port)
