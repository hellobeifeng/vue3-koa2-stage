import Koa from 'koa'
import R from 'ramda'
import { join } from 'path'
import configDefault from './config'

const config = configDefault.getConfig()
const MIDDLEWARES = ['general', 'router']
const useMiddlewares = (app) => {
  R.map(
    R.compose(
      R.forEachObjIndexed(e => e(app)),
      require,
      name => join(__dirname, `./middlewares/${name}`)
    )
  )(MIDDLEWARES)
}

async function start () {
  const app = new Koa()
  const { port } = config

  app.on('error', (err, ctx) => {
    console.error('server error', err.message, ctx)
  });

  await useMiddlewares(app)

  app.listen(port, err => {
    if (err) {
      console.error(`env: ${process.env.NODE_BK_ENV} server, listen port error`, err)
    } else {
      console.info(`env: ${process.env.NODE_BK_ENV} server, started at ${port}`)
    }
  })
}

start()
