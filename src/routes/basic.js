const Router = require('@koa/router');
const jwt = require('jsonwebtoken')

const { Api_Prefix } = require('../config/constant')

const { models } = require('../db')

const router = new Router({ prefix: Api_Prefix });

router
  .post('/login', async (ctx, next) => {
    const body = ctx.request.body
    const user = await models.User.findOne({ where: {loginName: body.loginName}})
    if(user && user.password === body.password){
      const token = jwt.sign(body, 'asdf')
      ctx.body = {
        code: 200,
        token
      }
    } else {
      ctx.body = {
        code: 401,
        message: '用户名或密码错误'
      }
    }
  });

module.exports = router