const router = require('koa-router')();
const controller = require('../controllers/commentController');

router
  .get('/', controller.getAll)
  .get('/:commentId', controller.getById)
  .post('/', controller.create)
  .put('/:commentId', controller.update)
  .delete('/:commentId', controller.remove);

module.exports = router.routes();
