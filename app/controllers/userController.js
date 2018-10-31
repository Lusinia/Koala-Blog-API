const User = require('../models/userModel');
const jwt = require('jwt-simple');
const getAll = async ctx => {
  const users = await User.find({});

  ctx.sendOK(users);
};

const getById = async ({ sendOK, params: { id: _id } }) => {
  const user = await User.findOne({ _id });
  sendOK(user);
};

const updateUser = async ({ sendCreated, request: { body: { firstName, lastName }, params: { id } } }) => {
  if (firstName || lastName) {
    try {
      const user = await User.findOneAndUpdate({ _id: id }, { $set: body }, { new: false });
      sendCreated(user);
    } catch (e) {
      console.log(e.message);
    }
  }
};

module.exports = {
  getAll,
  getById,
  updateUser
};
