const { createReadStream } = require('fs');
const router = require('koa-router')();

router.get('/', ctx => {
  ctx.type = 'html';
  ctx.body = createReadStream(rootFolder('dist/index.html'));
})

module.exports = router.routes();
