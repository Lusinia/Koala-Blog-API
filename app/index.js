require('dotenv').config();
require('./utils/root');

const Koa = require('koa');
const mongoose = require('mongoose');
const { resolve } = require('path');

// middlewares
const logger = require('koa-logger');
const koaBody = require('koa-body');
const helmet = require('koa-helmet');
const koaValidator = require('koa-async-validator');
const cors = require('@koa/cors');
const send = require('koa-send');
const serve = require('koa-static');
const responseMiddlewares = require('./middlewares/response');
const koaWebpack = require('koa-webpack');
const webpack = require('webpack');

const routes = require('./routes');

const app = new Koa();

//config
const argv = require('./utils/argv');
const port = require('./utils/port');
const webpackConfig = require('../config');
var compiler = webpack(webpackConfig);


const customHost = argv.host || process.env.MONGO_SERVER;
const host = customHost || null;
const prettyHost = customHost || 'localhost';


mongoose.connect(host, { useNewUrlParser: true }).then((mongo) => {
  console.log('connected to mongo db');
}).catch((err) => {
  console.log('Failed to connect to database', { error: err });
});

app.use(serve(rootFolder('dist')));

koaWebpack({ config: webpackConfig }).then(middleware => {
  app.use(middleware);

  app.use(async ctx => {
    const filename = resolve(webpackConfig.output.path, 'index.html');
    ctx.response.type = 'html';
    ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename)

  });
});
// app.use(koaWebpack({config:webpackConfig }));

app.use(require("koa-webpack-hot-middleware")(compiler));


app.use(logger());
app.use(helmet());
app.use(cors());
app.use(koaBody());
app.use(responseMiddlewares);
app.use(routes.routes());
app.use(routes.allowedMethods());



app.listen(port, () => {
  console.log('started', prettyHost);
});


module.exports = app;
