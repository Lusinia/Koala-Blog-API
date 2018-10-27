require('dotenv').config();
const Koa = require('koa');

const mongoose = require('mongoose');
const app = new Koa();

const logger = require('koa-logger');
const koaBody = require('koa-body');
const helmet = require('koa-helmet');
const koaValidator = require('koa-async-validator');
const cors = require('@koa/cors');

const routes = require('./routes');
// const responses = require('./middlewares/responses');
// const errorHandler = require('./middlewares/error').baseErrorHandler;
// const customValidators = require('./validators/custom');
// const { scheduleResetSubscription } = require('./controller/user');

mongoose.connect(process.env.MONGO_SERVER, { useNewUrlParser: true }).then((mongo) => {
  console.log('connected to mongo db');
}).catch((err) => {
  console.log('Failed to connect to databse', { error: err });
});

app.use(logger());
app.use(helmet());
app.use(cors());
app.use(koaBody());
// app.use(koaValidator({ customValidators }));
// app.use(responses);
// app.use(errorHandler);
app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(process.env.APP_PORT, () => {
});
