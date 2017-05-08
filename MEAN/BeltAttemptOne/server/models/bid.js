var mongoose = require('mongoose');
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var BidSchema = new mongoose.Schema({
  _user: {type: ObjectId, ref: 'User'},
	amount: {type: Number},
  _product: {type: ObjectId, ref: 'Product'}
},{timestamps:true})

module.exports = mongoose.model('Bid', BidSchema);
