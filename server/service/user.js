export async function getUserInfoByName(userName = '默认') {
  const userInfo = {
    name: userName,
    age: 23
  }
  return userInfo
}
