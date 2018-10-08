var express = require('express');


var app = express();
// '/'route and remain is callback
app.get('/', function (req,res){
    res.send('Hello World !');

});

app.listen(3300);