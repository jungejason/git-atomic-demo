const port = 3000
const express = require('express')
const app = express()

app.get('/timestamp', function (req, res) {
  res.send('' + Date.now())
})

app.get('/getRandom', function (req, res) {
  res.send('The random number is:' + Math.random())
})

app.get('/', function (req, res) {
  res.send('hello world')
})

// Start the server
app.listen(port)
