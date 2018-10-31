const router = require('koa-router')();

const usersRoutes = require('./usersRoutes');
const postRoutes = require('./postRoutes');
const authRoutes = require('./authRoutes');

router.use('/api/users', usersRoutes);
router.use('/api/posts', postRoutes);
router.use('/api/auth', authRoutes);

module.exports = router;
