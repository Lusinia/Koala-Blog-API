const mongoose = require('mongoose');
const jwt = require('jwt-simple');
const keys = require('../config');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  role: String,
  lastVisited: { type: Date, default: Date.now },
  registerDate: { type: Date, default: Date.now },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

UserSchema.pre('validate', function (next) {
  const user = this;
  try {
    user.password = jwt.encode(user.password, keys.jwt.secret);
    next();
  } catch (e) {
    next(e);
  }
});

module.exports = mongoose.model('User', UserSchema);
