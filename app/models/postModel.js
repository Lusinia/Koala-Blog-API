const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  imageURL: { type: String, default: '' },
  body: String,
  title: String,
  isOwner: Boolean,
  date: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  },
});

module.exports = mongoose.model('Post', PostSchema);

