const router = require('koa-router')();
const controller = require('../controllers/authController');

router
  .post('/signup', controller.createUser)
  .post('/signin', controller.auth)
  .get('/quick-auth', controller.quickAuth)

module.exports = router.routes();
