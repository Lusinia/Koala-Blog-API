const { createReadStream } = require('fs');

module.exports = ctx => {
  ctx.type = 'html';
  ctx.body = createReadStream(__dirname + '/../../dist/index.html');
};
