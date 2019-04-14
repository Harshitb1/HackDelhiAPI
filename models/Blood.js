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
  },
  temperature: {
    type: String,
  },
  humidity:{
    type: String,
  },
  isfaulty:{
    type:String,
  },
  date: {
    type: String,
    default:(new Date).getTime()
  }
});

module.exports = Post = mongoose.model('blood', BloodSchema);
