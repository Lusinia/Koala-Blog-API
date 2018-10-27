const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  lastVisited: { type: Date, default: Date.now },
  registerDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
