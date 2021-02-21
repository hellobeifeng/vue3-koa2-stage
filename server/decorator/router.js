import { resolve } from 'path'
import KoaRouter from 'koa-router'
import glob from 'glob'
import R from 'ramda'

const pathPrefix = Symbol('pathPrefix')
const routeMap = []

const resolvePath = R.unless(
  R.startsWith('/'),
  R.curryN(2, R.concat)('/')
)

const changeToArr = R.unless(
  R.is(Array),
  R.of
)

export class Route {
  constructor (app, routesPath) {
    this.app = app
    this.router = new KoaRouter()
    this.routesPath = routesPath
  }
  init = () => {
    const { app, router, routesPath } = this
    glob.sync(resolve(routesPath, './*.js')).forEach(require)
    R.forEach(
      ({ target, method, path, callback }) => {
        const prefix = resolvePath(target[pathPrefix])
        router[method](prefix + path, ...callback)
      }
    )(routeMap)
    app.use(router.routes())
    app.use(router.allowedMethods())
  }
}

export const convert = middleware => (target, key, descriptor) => {
  target[key] = R.compose(
    R.concat(
      changeToArr(middleware)
    ),
    changeToArr
  )(target[key])
  return descriptor
}

export const setRouter = method => path => (target, key, descriptor) => {
  routeMap.push({
    target,
    method,
    path: resolvePath(path),
    callback: changeToArr(target[key])
  })
  return descriptor
}

export const Controller = path => target => (target.prototype[pathPrefix] = path)

export const Get = setRouter('get')

export const Post = setRouter('post')

export const Put = setRouter('put')

export const Delete = setRouter('delete')

export const Log = convert(async (ctx, next) => {
  console.time(`${ctx.method} - ${ctx.url}`)
  await next()
  console.timeEnd(`${ctx.method} - ${ctx.url}`)
})

/**
 * @Required({
 *   body: ['name', 'password']
 * })
 */
export const Required = paramsObj => convert(async (ctx, next) => {
  let errs = []

  R.forEachObjIndexed(
    (val, key) => {
      errs = errs.concat(
        R.filter(
          name => !R.has(name, ctx.request[key])
        )(val)
      )
    }
  )(paramsObj)

  if (!R.isEmpty(errs)) {
    return (
      ctx.body = {
        code: 'A00500',
        message: `${R.join(', ', errs)} is required`
      }
    )
  }
  await next()
})
