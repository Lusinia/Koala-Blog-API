const controllers = require('../models/userModel');

const getAll = ctx => {
  ctx.body = 'Hello';
}

module.exports = {
  getAll,
}
