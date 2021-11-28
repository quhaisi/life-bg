const Router = require('@koa/router');

const router = new Router({ prefix: '/albums' });

router
  .get('/', (ctx, next) => {
    console.log('get album')
    ctx.body = 'get album'
  })
  .post('/', (ctx, next) => {
    // ctx.router available
  });

module.exports = router