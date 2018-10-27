const mongoose = require('mongoose');

const User = new mongoose.Schema({
  firstName: String,
  lastName: String,
  lastVisited: { type: Date, default: Date.now },
  registerDate: { type: Date, default: Date.now }
});

module.exports = User;
