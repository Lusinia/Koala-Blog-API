// const { createReadStream } = require('fs');
const router = require('koa-router')();
const fs =require('fs');

router.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});
module.exports = router.routes();

