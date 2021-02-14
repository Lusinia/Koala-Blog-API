module.exports = function (ctx) {
  paths = [
    { method: 'POST', path: /auth/g },
    { method: 'GET', path: /posts/g }
  ];
  let result = false;
  paths.forEach(item => {
    if (!result) {
      result = !!(ctx.originalUrl.match(item.path) && ctx.request.method === item.method);
    }
  });
  return result;
};
