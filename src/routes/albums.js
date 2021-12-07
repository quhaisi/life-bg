const Router = require('@koa/router');
const { Api_Prefix } = require('../config/constant')

const { models } = require('../db')

const router = new Router({ prefix: Api_Prefix + '/albums' });

router
  .get('/', async (ctx, next) => {
    const users = await models.Album.findAll();
    ctx.body = users
  })
  .post('/', async (ctx, next) => {
    const body = ctx.request.body
    await models.Album.create(body);
    ctx.body = body
  });

module.exports = router