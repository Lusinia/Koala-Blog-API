const User = require('../models/userModel');
const jwt = require('jwt-simple');
const keys = require('../config');

const createUser = async ({
                            sendCreated, sendError,
                            request: { body: { email, password, passwordConf, firstName, lastName } }
                          }) => {
  if (firstName && lastName && email && password && passwordConf && password === passwordConf) {
    if (password === passwordConf) {
      try {
        const user = await new User({ email, password, passwordConf, firstName, lastName });
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

const auth = async ({ sendCreated, sendError, request: { body: { email, password } } }) => {
  if (email && password) {
    try {
      const encoded = jwt.encode(password, keys.jwt.secret);
      const user = await User.find({ email, password: encoded });
      sendCreated({user, token: encoded });
    } catch (e) {
      sendError(e.message, 403);
    }
  }
};
module.exports = {
  createUser,
  auth
};
