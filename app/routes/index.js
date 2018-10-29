const router = require('koa-router')();

const usersRoutes = require('./usersRoutes');
const postRoutes = require('./postRoutes');

router.use('/api/users', usersRoutes);
router.use('/api/posts', postRoutes);


module.exports = router;

