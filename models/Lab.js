const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const LabSchema = new Schema({
 
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required:true
  },
  bloodList: [
    {
      blood: {
        type: Schema.Types.ObjectId,
        ref: 'blood'
      }
    }
  ]
  
});

module.exports = Post = mongoose.model('lab', LabSchema);
