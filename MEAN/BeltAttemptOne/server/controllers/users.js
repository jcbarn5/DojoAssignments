var mongoose = require('mongoose');
var User = mongoose.model('User')
var Product = mongoose.model('Product')
var Bid = mongoose.model('Bid')

module.exports = {
  create: function(req, res){
    User.findOne({name: req.body.name}, function(err, user){
      if(err){res.json(err);}
      if(!user){
        User.create(req.body, function(err, user){
          console.log('in users.js');
          console.log(user);
          if(err){res.json(err);}
          res.json(user);
        })
      }
      else{res.json(user);}
    })
  },
///////////////////////
  // newCarBid: function(req, res){
  //   carBid.findOne({bid: req.body.bid}, function(err, bid){
  //     if(err){res.json(err);}
  //     if(!bid){
  //       carBid.create({_user: user.id, bid: req.body.content}, function(err, bid){
  //         if(err){res.json(err);}
  //         res.json(bid);
  //       })
  //     }
  //     else{res.json(bid);}
  //   })
  // },
////////////////
  carBids: function(req, res) {
    console.log(req.params);
    console.log('xxxxxxxxxxxxxxxxxxxxxxxx');
    User.findById({_id: req.params.id}, function(err, user){
      console.log('*********************');
      console.log(user);
    Product.findOne({_id: "59036ea84c364cf699eaade8"}, function(err, product){
      if (err){res.json(err);}
      Bid.create({_user: req.params.id, amount: req.body.bid, _product: '59036ea84c364cf699eaade8'}, function(err, bid){
        if (err){res.json(err);}
        user.bid.push(bid)
        product.bid.push(bid)
      })
    });
  })
  },
  index: function(req, res) {
    Product.find({}, function(err, product){
      if (err){res.json(err);}
      res.json(product)
    })
  }

}
