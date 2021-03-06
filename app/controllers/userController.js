const User = require('../models/userModel');

const getAll = async ctx => {
  const users = await User.find({});

  ctx.sendOK(users);
}

const getById = async ({
  sendOK,
  params: {
    id: _id
  }
}) => {
  const user = await User.findOne({ _id });
  sendOK(user);
}

const createUser = async ({
  sendCreated,
  request: {
    body: {
      firstName,
      lastName
    }
  }
}) => {
  const user = await User.create({ firstName, lastName });
  sendCreated(user);
}

module.exports = {
  getAll,
  createUser,
  getById
}
