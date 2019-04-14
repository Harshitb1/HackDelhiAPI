const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BloodSchema = new Schema({
  
 
  email:{
    type:String
  },
  date: {
    type: String,
    default:(new Date).getTime()
  }
});

module.exports = Post = mongoose.model('blood11', BloodSchema);
