const Router = require('@koa/router');
const jwt = require('jsonwebtoken')

const { Api_Prefix } = require('../config/constant')

const { models } = require('../db')

const router = new Router({ prefix: Api_Prefix });

router
  .post('/login', async (ctx, next) => {
    const body = ctx.request.body
    const token = jwt.sign(body, 'asdf')
    ctx.body = {
      code: 200,
      token
    }
  });

module.exports = router