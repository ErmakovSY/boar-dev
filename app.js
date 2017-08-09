var express = require('express');
var app = express();
var adminController = require('./app/controllers/adminController')

app.set('views', './app/views')
app.set('view engine', 'jade');

app.get('/new', function (req, res) {
  res.send('Hello, my dear friend!')
})

app.get('/', adminController.selectAllCards);

module.exports = app;
