require('dotenv').config();
require('./utils/root');

const Koa = require('koa');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');

const logger = require('koa-logger');
const koaBody = require('koa-body');
const helmet = require('koa-helmet');
// const koaValidator = require('koa-async-validator');
const cors = require('@koa/cors');
const serve = require('koa-static');
const jwt = require('koa-jwt');

const routes = require('./routes');

// middleware

const responseMiddlewares = require('./middlewares/response');
const headersMiddlewares = require('./middlewares/headers');
const webMiddleware = require('./middlewares/web');
const authUnlessMiddleware = require('./middlewares/authUnless');
const isAuthMiddleware = require('./middlewares/isAuth');

const keys = require('./config');
const app = new Koa();

const seeds = require('./seeds');

/** configure cloudinary */
cloudinary.config({
  cloud_name: keys.cloudinary.cloud_name,
  api_key: keys.cloudinary.api_key,
  api_secret: keys.cloudinary.api_secret
});


mongoose.connect(process.env.MONGO_SERVER, { useNewUrlParser: true }).then((mongo) => {
  console.log('connected to mongo db');
}).catch((err) => {
  console.log('Failed to connect to database', { error: err });
});

app.use(serve(rootFolder('dist')));

app.use(logger());
app.use(helmet());
app.use(cors());
app.use(koaBody());
app.use(headersMiddlewares);
app.use(responseMiddlewares);
app.use(jwt({ secret: keys.jwt.secret }).unless({
  custom: authUnlessMiddleware
}));
app.use(isAuthMiddleware);
app.use(routes.routes());
app.use(routes.allowedMethods());
app.use(webMiddleware);

seeds();

app.listen(process.env.APP_PORT || 3000, () => {
});


module.exports = app;
