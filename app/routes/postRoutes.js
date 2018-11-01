const router = require('koa-router')();
const controller = require('../controllers/postController');
const hasPerm = require('../middlewares/hasPerm');

router
  .get('/', controller.getAll)
  .get('/:id', controller.getById)
  .post('/', controller.createPost)
  .put('/:id', hasPerm(['USER']), controller.updatePost)
  .delete('/:id', controller.deletePost);

module.exports = router.routes();
