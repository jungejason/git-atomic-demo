var express = require('express')
var app = express()

app.get('/timestamp', function (req, res) {
  res.send('' + Date.now())
})

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)
