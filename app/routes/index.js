const router = require('koa-router')();

const usersRoutes = require('./usersRoutes');

router.use('/users', usersRoutes);

module.exports = router;
