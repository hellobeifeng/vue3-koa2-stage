const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const koaStatic = require('koa-static')
const KoaMount = require('koa-mount')
const path = require('path')

const index = require('./routes/index')
const userRoute = require('./routes/users.js')


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(koaStatic(__dirname + '/public'))
app.use(KoaMount('/stage', koaStatic(path.join( __dirname,  '../client/dist'))))

// routes
app.use(index.routes(), index.allowedMethods())
app.use(userRoute.routes(), userRoute.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

// 监听端口
app.listen(3000, err => {
  if (err) {
      console.error('listen port error:', err)
  } else {
      console.info('server started at port ' + 3000)
  }
})

