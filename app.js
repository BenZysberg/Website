var express = require('express');  // web server automation
var app = express();
var port=80;  // default port number! 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use( 
    express.static('.')
);

app.listen(port); //the port you want to use
console.log( "app listening on port "+port );