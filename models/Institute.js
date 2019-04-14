const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const InstituteSchema = new Schema({
 
  ABneg: {
    type: String,
  },
  ABpos: {
    type: String,
  },
  Aneg: {
    type: String,
  },
  Apos: {
    type: String,
  },
  Bneg: {
    type: String,
  },Bpos: {
    type: String,
  },Lat: {
    type: String,
  },Lon: {
    type: String,
  },Oneg: {
    type: String,
  },Opos: {
    type: String,
  },Phone: {
    type: String,
  },name: {
    type: String,
  }
  
});

module.exports = Post = mongoose.model('institute', InstituteSchema);
