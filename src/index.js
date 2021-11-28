const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser');
const albumsRouter = require('./routes/albums')

app.use(bodyParser());

app.use(albumsRouter.routes())
app.use(async ctx => {
  ctx.body = 'Hello World'
});

app.listen('3000', () => {
  console.log('Listening on ' + 3000);
})
