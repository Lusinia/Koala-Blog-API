const router = require('koa-router')();

const webRoute = require('./webRoute');

const usersRoutes = require('./usersRoutes');
const postRoutes = require('./postRoutes');

router.use('/', webRoute);

router.use('api/users', usersRoutes);
router.use('api/posts', postRoutes);

module.exports = router;
