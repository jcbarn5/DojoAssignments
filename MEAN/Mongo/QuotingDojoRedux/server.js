var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote');

var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String,
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');
mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Quote.find({}, function(err, quotes) {
      if(err){
        console.log(error);
      }
      res.render('index', {quotes});
    })
})
app.get('/toQuotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
      if(err){
        console.log(error);
      }
      res.render('quotes', {quotes});
    })
})
app.post('/addQuote', function(req, res) {
  console.log("POST DATA", req.body);
  var quote = new Quote({name: req.body.name, quote: req.body.quote});
  quote.save(function(err) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})
