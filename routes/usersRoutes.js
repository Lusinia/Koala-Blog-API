const router = require('koa-router')();

router.get('/users', ctx => {
  ctx.body = 'Hello'
})

module.exports = router.routes();
