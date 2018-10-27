const router = require('koa-router')();
const controller = require('../controllers/userController');

router
  .get('/', controller.getAll)
  .get('/:id', controller.getById)
  .post('/', controller.createUser);

module.exports = router.routes();
