var express = require('express');


var app = express();
// either port variable or 3000 
app.set('port',process.env.PORT|| 3000);

////////MIDDLEWARE
// app.use(function (req,res, next){
//     console.log('Request from'+ req.ip);
//     next();
// });



// '/'route and remain is callback
app.get('/', function (req,res){
    res.send('Hello World !');

});


//app.listen(3300);

app.listen(app.get('port'), function(){
    console.log('Express server listening on port '+ 3000);

});


var express = require('express');
var config = require('./config/config');
var app = express();
var port = process.env.port || 3000
require('./config/express')(app, config);
require('http').createServer(app).listen(port, function () {
console.log("HTTP Server listening on port: %d, in %s mode", port, app.get('env'));
});
