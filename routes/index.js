const router = require('koa-router')();
const usersRoutes = require('./usersRoutes');

router.use('/', usersRoutes);

module.exports = router;
