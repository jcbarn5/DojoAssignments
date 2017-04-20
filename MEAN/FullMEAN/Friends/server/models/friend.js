var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema(
  {
    name: String,
    favoriteLanguage: String,
  },
  {timestamps: true})

mongoose.model('Friend', FriendSchema);
