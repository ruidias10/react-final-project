const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },  
  email: {
    type: String,
    required: true
  }, 
  type: {
    type: String,
    default: 'viewer' // viewer || admin
  },
  pass: {
    type: String,
    required: true
  },
  token: String,
  movies: {
    viewed: [],
    likes: [],
  },  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(mongoosePaginate);
mongoose.model('User', UserSchema);