// 通用中间件集合
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import path from 'path'
import koaStatic from 'koa-static'
import KoaMount from 'koa-mount'
import json from 'koa-json'
import { historyApiFallback } from 'koa2-connect-history-api-fallback'

export const addBodyParser = app => {
  app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
  }))
}

export const addLogger = app => {
  app.use(logger())
}

export const addMount = app => {
  app.use(historyApiFallback({
    index: '/stage'
  }))
  app.use(KoaMount('/stage', koaStatic(path.join( __dirname,  '../../client/dist'))))
}

export const addJSON = app => {
  app.use(json())
}
