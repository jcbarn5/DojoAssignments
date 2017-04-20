var mongoose = require('mongoose');
var Sloth = mongoose.model('Sloth');

module.exports = {
  show: function(req, res) {
    Sloth.find({}, function(err, sloths) {
      // if(err){
      //   console.log(error);
      // }
      res.render('index', {sloths: sloths});
    })
  },
  addSloth: function(req, res) {
    var sloth = new Sloth({name: req.body.name, age: req.body.age});
    sloth.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        res.redirect('/');
      }
    })
  },
  edit: function(req, res) {
      Sloth.findOne({_id:req.params.id}, function(err, sloths) {
        if(err){
          console.log(error);
        }
        res.render('edit', {sloths});
      })
    },
  delete: function(req,res){
      Sloth.remove({_id:req.params.id}, function(err, sloths) {
            res.redirect('/');
      })
    },
  update: function(req, res) {
    Sloth.findOne({_id:req.params.id}, function(err, sloth){
      sloth.name = req.body.name;
      sloth.age = req.body.age;
      sloth.save(function(err) {
        if(err) {
          console.log('something went wrong');
        } else {
          console.log('successfully added a user!');
          res.redirect('/');
          }
        })
      })
    },
};
