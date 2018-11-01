const router = require('koa-router')();

const usersRoutes = require('./usersRoutes');
const postRoutes = require('./postRoutes');
const authRoutes = require('./authRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/api/users', usersRoutes);
router.use('/api/posts', postRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/posts/:id/comments', commentRoutes);

module.exports = router;
