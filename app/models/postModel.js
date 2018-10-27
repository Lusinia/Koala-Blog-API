const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: String,
  imageURL: { type: String, default: '' },
  body: String,
  date: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);

