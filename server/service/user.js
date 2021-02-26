import mongoose from 'mongoose'
const User = mongoose.model('User')

export async function getUserInfoByName(userName = '默认') {
  const userInfo = {
    name: userName,
    age: 30
  }
  return userInfo
}

export const createUser = async (UserObj) => {
  let result = await new User(UserObj).save()
  return result
}
