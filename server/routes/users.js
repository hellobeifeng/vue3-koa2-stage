import { getUserInfoByName } from '../service/user.js'
import { SuccessModel, ErrorModel } from '../utils/formattedRes/ResModel.js'
import { systemFailInfo } from '../utils/formattedRes/ResInfo.js'

import {
  Controller,
  Get,
  Required,
  Log
} from '../decorator/router'
@Controller('/stage/api/users')
export default class UserRouter {
  @Get('/info')
  @Log
  @Required({
    query: ['name']
  })
  async getUserInfo (ctx, next) {
    let queryName = ctx.query.name || '系统默认'
    const userInfo = await getUserInfoByName(queryName)
    if (userInfo) {
      // { code: 'A00200', data: {....} }
      ctx.body = new SuccessModel(userInfo)
    } else {
      // { code: 'A00500', message: '系统异常' }
      ctx.body = new ErrorModel(systemFailInfo)
    }
  }
}
