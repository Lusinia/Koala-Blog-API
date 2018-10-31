const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  imageURL: { type: String, default: '' },
  body: String,
  title: String,
  date: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  comments: [
    {
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      text: String
    }
  ]
});

module.exports = mongoose.model('Post', PostSchema);

