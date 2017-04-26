var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//if var Schema = mongoose.Shcema is used, below in type: we can use Schema.Types.ObjectId instead of mongoose.Schema.Types.ObjectId.

var UserSchema = new mongoose.Schema({
	user_name: {type: String, required: "You must provide a user name.", maxlength: 20},
	messages: [{type: mongoose.Schema.Types.ObjectId, ref: "Message"}],
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
},{timestamps:true})

mongoose.model('User', UserSchema); //For more information, research mongoose schemas
