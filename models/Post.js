const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BloodSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  bloodgroup: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required:true
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('bloods', BloodSchema);
