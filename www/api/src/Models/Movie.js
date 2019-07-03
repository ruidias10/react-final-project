const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  director: String,
  writer: String,
  language: String,
  year: Number, 
  actors: String, 
  country: String, 
  production: String,  
  category: String, 
  rewrite: String,
  website: String,  
  type: {
    type: String,
    default: 'Movie'
  },
  onair: {
    type: Boolean,
    default: true
  },
  media: {
    poster: String,
    image: String,
    clip: String,    
    trailer: String,
    timestampClip: String,
    timestampTrailer: String
  },
  meta: {
    likes: Number,
    stars: Number,
    views: Number
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

MovieSchema.plugin(mongoosePaginate);
mongoose.model('Movie', MovieSchema);