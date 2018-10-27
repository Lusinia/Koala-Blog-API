const router = require('koa-router')();
const controller = require('../controllers/postController');

router.get('/', controller.getAll)
  .get('/:id', controller.getById)
  .post('/', controller.createPost);

module.exports = router.routes();
