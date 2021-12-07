const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser');
const db = require('./db')
const albumsRouter = require('./routes/albums')

app.use(bodyParser());

app.use(albumsRouter.routes())
app.use(async ctx => {
  ctx.body = 'Hello World'
});

app.listen('3000', async () => {
  try {
    await db.authenticate()
    await db.sync() // 开发环境执行同步命令
		console.log('Database connection OK!');
    console.log('Listening on ' + 3000);
  } catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
  }
})
