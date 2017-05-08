var mongoose = require('mongoose');
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var UserSchema = new mongoose.Schema({
	name: String,
	bids: [{type: ObjectId, ref: 'Bid'}]
},{timestamps:true})

module.exports = mongoose.model('User', UserSchema);
