const router = require('koa-router')();
const controller = require('../controllers/authController');

router
  .post('/signup', controller.createUser)
  .post('/signin', controller.auth)

module.exports = router.routes();
