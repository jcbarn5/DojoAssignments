var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

console.log('friends controller, back end')
module.exports = {
  create: function(req, res){
    // console.log(req);
    console.log(req.body);
    Friend.create(req.body, function(err, result) {
      if(err) {console.log('error');}
      else {
        console.log('successfully added a friend!');
        res.json(result);
      }
    })
  },
    index: function(req,res){
      Friend.find({}, function(err, friends) {
        if(err){console.log(err);}
        res.json({friends});
      })
    },
    delete: function(req, res){
      Friend.remove({_id: req.params.id}, function(err){
        if(err){console.log(err);}
      })
    },
    show: function(req,res){
      Friend.findOne({_id: req.params.id}, function(err, friend){
        if(err){console.log(err);}
        res.json({friend})
      })
    },
    update: function(req, res){
        Friend.findOne({_id: req.params.id}, function(err, friend){
            friend.name = req.body.name;
            friend.favoriteLanguage = req.body.favoriteLanguage;
            friend.save(function(err){
                if(err){console.log(err);}
            });
        })
    },
  }
