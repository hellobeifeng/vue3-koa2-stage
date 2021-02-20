const router = require('koa-router')()
import { getUserInfo } from '../controller/user.js'

router.prefix('/api/users')

router.get('/info', getUserInfo)

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
