var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');





app.listen(8000, function() {
    console.log("listening on port 8000");
})
