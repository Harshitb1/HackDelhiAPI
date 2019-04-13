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
  temperature: {
    type: String,
    required:true
  },
  humidity:{
    type: String,
    required:true
  },
  isfaulty:{
    type:String,
    required:true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('blood', BloodSchema);
