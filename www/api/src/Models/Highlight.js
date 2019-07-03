const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const HighlightSchema = new mongoose.Schema({
  movie: [],
  onair: {
    type: Boolean,
    default: true
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

HighlightSchema.plugin(mongoosePaginate);
mongoose.model('Highlight', HighlightSchema);