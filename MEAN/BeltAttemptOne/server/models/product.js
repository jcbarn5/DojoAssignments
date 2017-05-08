var mongoose = require('mongoose');
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var ProductSchema = new mongoose.Schema({
	name: String,
	bids: [{type: ObjectId, ref: 'Bid'}]
},{timestamps:true})

module.exports = mongoose.model('Product', ProductSchema);
