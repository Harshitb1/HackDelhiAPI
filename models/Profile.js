const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  blood: {
    type: Schema.Types.ObjectId,
    ref: 'blood'
  },
  bloodbank: {
    type: String,
    required: true,
    max: 40
  },
  institute: {
    type: String
  },
  laboratory: {
    type: String
  },
  location: {
    type: String
  }, 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
