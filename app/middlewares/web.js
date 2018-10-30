const { createReadStream } = require('fs');

module.exports = async (ctx, next) => {
  if (ctx.response.status === 404) {
    ctx.type = 'html';
    ctx.body = createReadStream(rootFolder('dist/index.html'));
  }
  await next();
};
