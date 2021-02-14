const router = require('koa-router')();
const controller = require('../controllers/userController');

router
  .get('/', controller.getAll)
  .get('/:id', controller.getById)
  .put('/:id', controller.updateUser);

module.exports = router.routes();
