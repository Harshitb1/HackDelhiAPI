const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  productId: {
    type: String,
    required: true,
    max: 40
  },
  producttype: {
    type: String
  },
  size: {
    type: String
  },
  description: {
    type: String
  }, 
  owner: {
    type: String
  }, 
  Issuer: {
    type: String
  }, 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
