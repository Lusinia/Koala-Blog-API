const User = require('../models/userModel');

module.exports = roles => async (ctx, next) => {
  const authToken = ctx.request.header.authorization.split(' ')[1];
  const user = await User.find({ password: authToken });
  if (typeof roles === 'string') {
    ctx.hasPerm = user.role === roles;
  } else if (Array.isArray(roles)) {
    const index = roles.findIndex(item => item === user.role);
    ctx.hasPerm = index >= 0;
  } else {
    ctx.hasPerm = true;
  }
  await next();
};
