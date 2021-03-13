import mongoose from 'mongoose'
const User = mongoose.model('User')
let mockUserInfo = {
  "name": "Li_lei",
  "userInfo": {
    "username": "Li_lei",
    "role": [
      "admin_role",
      // "product_role",
      // "operation_role",
      // "development_role"
    ],
    "permission": {
      "api": [
        {
          "code": "/_GET",
          "type": "api",
          "resource": "/",
          "method": "GET",
        },
        {
          "code": "/home_GET",
          "type": "api",
          "resource": "/home",
          "method": "GET",
        }
      ],
      "view": [
        {
          "code": "editBtn",
          "type": "view",
          "resource": "editBtn"
        },
        {
          "code": "delBtn",
          "type": "view",
          "resource": "delBtn"
        },
        {
          "code": "searchBtn",
          "type": "view",
          "resource": "searchBtn"
        }
      ]
    }
  }
}

export async function getUserInfoByName(userName = '默认') {
  mockUserInfo.userInfo.username = userName
  return mockUserInfo.userInfo
}

export const createUser = async (UserObj) => {
  let result = await new User(UserObj).save()
  return result
}
