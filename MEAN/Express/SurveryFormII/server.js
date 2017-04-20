var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
//line 7 not needed for this assignment, no static files
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
//line 10, allow view engine to be 'ejs'
app.set('view engine', 'ejs');

// var route = require('./routes/index.js')(app);
app.get('/', function(req, res){
  res.render('index');
})

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
});
console.log('something');

var io = require('socket.io').listen(server);
console.log('something');

// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
  
  console.log('asdfasdf');


  socket.on("button_clicked", function (data){

    socket.emit('server_response', {response: data});
    socket.emit('server_response2', {num: Math.floor(Math.random()*1000)+1});

  })
})
