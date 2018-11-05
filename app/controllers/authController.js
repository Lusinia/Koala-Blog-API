const jwt = require('jwt-simple');
const User = require('../models/userModel');
const keys = require('../config');

const createUser = async ({
                            sendCreated, sendError,
                            request: { body: { email, password, passwordConf, firstName, lastName } }
                          }) => {
  if (firstName && lastName && email && password && passwordConf && password === passwordConf) {
    if (password === passwordConf) {
      try {
        const user = await new User({ email, password, firstName, lastName });
        await user.save();
        sendCreated({ user, token: user.password });

      } catch (e) {
        sendError(e.message, 403);
      }
    } else {
      sendError('Passwords must be equal', 403);
    }
  }
};

const auth = async ({ sendOK, sendError, request: { body: { email, password } } }) => {
  if (email && password) {
    try {
      const encoded = jwt.encode(password, keys.jwt.secret);
      const user = await User.find({ email, password: encoded });
      if (user.length) {
        sendOK({ user: user[0], token: encoded });
      } else {
        sendError('There is no such user');
      }
    } catch (e) {
      sendError(e.message, 403);
    }
  }
};

const quickAuth = async ({ sendOK, sendError, user }) => {
  console.log('user', user);
  if (user) {
    sendOK('Ok');
  } else {
    sendError('There is no such user');
  }
};


module.exports = {
  createUser,
  auth,
  quickAuth
};
