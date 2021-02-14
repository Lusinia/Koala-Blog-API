const User = require('../models/userModel');

module.exports = async (ctx, next) => {
  const authToken = ctx.request.header.authorization.split(' ')[1];
  const user = await User.find({ password: authToken });
  ctx.isAuth = !!user.length;
  ctx.user = user[0];
  await next();
};
