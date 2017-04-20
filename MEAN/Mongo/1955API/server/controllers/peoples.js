var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
  show: function(req, res){
    People.find({}, function(err, peoples){
      res.json(peoples)
    })
  },
  new: function(req, res){
    var people = new People({name: req.params.name}); people.save(function(err) {
      res.redirect('/');
    })
  },
  remove: function(req, res){
    People.remove({name:req.params.name}, function(err) {
      res.redirect('/');
          })
    },
  one: function(req, res){
    People.findOne({name:req.params.name}, function(err, peoples) {
      res.json(peoples)
          })
    },
  };
