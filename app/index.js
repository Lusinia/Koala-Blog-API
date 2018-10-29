require('dotenv').config();
const Koa = require('koa');
const mongoose = require('mongoose');

const logger = require('koa-logger');
const koaBody = require('koa-body');
const helmet = require('koa-helmet');
const koaValidator = require('koa-async-validator');
const cors = require('@koa/cors');
const serve = require("koa-static");

const routes = require('./routes');
const responseMiddlewares = require('./middlewares/response');

const app = new Koa();

mongoose.connect(process.env.MONGO_SERVER, { useNewUrlParser: true }).then((mongo) => {
  console.log('connected to mongo db');
}).catch((err) => {
  console.log('Failed to connect to database', { error: err });
});

app.use(serve(__dirname + '/../dist'));

app.use(logger());
app.use(helmet());
app.use(cors());
app.use(koaBody());
app.use(responseMiddlewares);
app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(process.env.APP_PORT || 3000, () => {
});


module.exports = app;
