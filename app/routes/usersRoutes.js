const router = require('koa-router')();
const controller = require('../controllers/userController');

router
  .get('/', controller.getAll)
  .post('/', controller.createUser);

module.exports = router.routes();
