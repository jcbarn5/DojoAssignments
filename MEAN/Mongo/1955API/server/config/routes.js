var mongoose = require('mongoose');
var peoples = require('../controllers/peoples.js');
var People = mongoose.model('People');

module.exports = function(app){
  app.get('/', function(req, res){
    peoples.show(req, res)
  })
  app.get('/new/:name', function(req, res){
    peoples.new(req, res)
  })
  app.get('/remove/:name/', function(req, res){
    peoples.remove(req, res)
  })
  app.get('/:name', function(req, res){
    peoples.one(req, res)
  })

};
