var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// var route = require('./routes/index.js')(app);
app.get('/', function(req, res){
  res.render('index');
})

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);
var count = 0;

// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {

  socket.on("button_clicked", function (){
    count++;
    socket.emit('server_response', {response: count});
  })
  socket.on("reset_clicked", function (){
    count = 0;
    socket.emit('server_response', {response: count});
  })

})
