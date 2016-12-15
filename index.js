var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.get('/*', function(req, res) {
  console.log("sending index");
  res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(process.env.PORT || 3000);