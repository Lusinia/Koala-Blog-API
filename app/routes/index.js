const router = require('koa-router')();

const usersRoutes = require('./usersRoutes');
const postRoutes = require('./postRoutes');
const template = require('../../views/template');
router.use('/users', usersRoutes);
router.use('/posts', postRoutes);
// router.get('/client',  ctx => {
//   const response = template('Client Side Rendered page')
//   // res.setHeader('Cache-Control', 'assets, max-age=604800')
//   ctx.body = response;
// });

// our apps data model
// const data = [
//   { "name": "Netflix",
//     "publisher": "Netflix, Inc",
//     "price": "Free",
//     "img":{
//       "src": "media/netflix.jpg",
//       "alt": "netflix app icon"
//     },
//     "desc": "<p>Watch TV shows and movies recommended just for you, including award-winning Netflix original series, movies, and documentaries.</p><p>Netflix has something for everyone. </p>",
//     "link": "https://itunes.apple.com/us/app/netflix/id363590051?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4",
//     "tweet":"Watch TV shows and movies recommended just for you"
//   }];
//
// let initialState = {
//   isFetching: false,
//   apps: data
// }
//
// //SSR function import
// const ssr = require('../../views/server');
//
// router.get('/', (req, res) => {
//   const { preloadedState, content}  = ssr(initialState)
//   const response = template("Server Rendered Page", preloadedState, content)
//   res.setHeader('Cache-Control', 'assets, max-age=604800')
//   res.send(response);
// });
router.get('*', async (ctx) => {
  ctx.body = `
     <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <title>React SSR</title>
       </head>
       <body>
         <div id="app"></div>
         <script type="text/javascript" src="/bundle.js"></script>
       </body>
     </html>
   `;
});

module.exports = router;
