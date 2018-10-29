const { createReadStream } = require('fs');

module.exports = ctx => {
  ctx.type = 'html';
  ctx.body = createReadStream(rootFolder('dist/index.html'));
};
