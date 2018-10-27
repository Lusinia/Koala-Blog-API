const router = require('koa-router')();
const controller = require('../controllers/userController');

router.get('/', controller.getAll);

module.exports = router.routes();
