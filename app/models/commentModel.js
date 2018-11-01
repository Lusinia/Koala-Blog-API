const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  text: String,
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);

