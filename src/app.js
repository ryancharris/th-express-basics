'use strict';

var express = require('express');

var app = express();

// GET home route
app.get('/', function(req, res){
  res.send("<h1>I love Treehouse!</h1>");
});

app.listen(3000, function(){
  console.log("The front-end server is running on port 3000!");
});
