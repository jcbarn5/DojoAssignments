var mongoose = require('mongoose');

var SlothSchema = new mongoose.Schema(
  {
 name: String,
 age: Number,
  },
  {timestamps: true})

var Sloth = mongoose.model('Sloth', SlothSchema);
