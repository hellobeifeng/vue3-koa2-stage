import { getUserInfoByName, createUser } from '../service/user.js'
import { SuccessModel, ErrorModel } from '../utils/formattedRes/ResModel.js'
import { systemFailInfo } from '../utils/formattedRes/ResInfo'

import {
  Controller,
  Get,
  Required,
  Log
} from '../decorator/router'
@Controller('/stage/api/users')
export default class UserRouter {
  @Get('/:name')
  @Log
  @Required({
    params: ['name']
  })
  async getUserInfoByName (ctx, next) {
    let name = ctx.params.name || '系统默认'
    const userInfo = await getUserInfoByName(name)
    if (userInfo) {
      // { code: 'A00200', data: {....} }
      ctx.body = new SuccessModel(userInfo)
    } else {
      // { code: 'A00500', message: '系统异常' }
      ctx.body = new ErrorModel(systemFailInfo)
    }
  }
  @Get('/create')
  async testCreateUserInfo (ctx, next) {
    let obj = {
      name: 'XiaoMing' + new Date().getTime(),
      age: 20 + Math.floor(Math.random() * 10)
    }
    let result = await createUser(obj)
    ctx.body = new SuccessModel(result)
  }
  // @Get('/info')
  // async getUserInfo (ctx, next) {
  //   const userInfo = ctx.session.user
  //   if (userInfo) {
  //     // { code: 'A00200', data: {....} }
  //     ctx.body = new SuccessModel({
  //       name: userInfo.name,
  //       age: userInfo.age
  //     })
  //   } else {
  //     // { code: 'A00500', message: '系统异常' }
  //     ctx.body = new ErrorModel(systemFailInfo)
  //   }
  // }
}
