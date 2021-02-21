// 路由中间件
import { Route } from '../decorator/router'
import { resolve } from 'path'

export const router = (app) => {
  const routesPath = resolve(__dirname, '../routes')
  new Route(app, routesPath).init()
}
