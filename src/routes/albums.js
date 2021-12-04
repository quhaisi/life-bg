const Router = require('@koa/router');
const { Api_Prefix } = require('../config/constant')

const router = new Router({ prefix: Api_Prefix + '/albums' });

router
  .get('/', (ctx, next) => {
    console.log('get album')
    ctx.body = 'get album'
  })
  .post('/', (ctx, next) => {
    const body = ctx.request.body
    ctx.body = body
  });

module.exports = router