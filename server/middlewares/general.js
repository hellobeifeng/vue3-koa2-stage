// 通用中间件集合
import path from 'path'
import bodyParser from 'koa-bodyparser'
import KoaLogger from 'koa-logger'
import koaStatic from 'koa-static'
import KoaMount from 'koa-mount'
import KoaJson from 'koa-json'
import KoaSession from 'koa-session'
import { historyApiFallback } from 'koa2-connect-history-api-fallback'

export const addBodyParser = app => {
  app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
  }))
}

export const addLogger = app => {
  app.use(KoaLogger())
}

export const addMount = app => {
  app.use(historyApiFallback({
    index: '/stage',
    whiteList: ['/stage/api/']
  }))
  app.use(KoaMount('/stage', koaStatic(path.join( __dirname,  '../../client/dist'))))
}

export const addJSON = app => {
  app.use(KoaJson())
}

export const addSession = app => {
  app.keys = ['vue3-koa2-stage']
  app.use(KoaSession({
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: false,
    signed: true,
    rolling: false
  }, app))
}
