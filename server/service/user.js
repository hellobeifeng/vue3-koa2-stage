export async function getUserInfoByName(userName = '默认') {
  const userInfo = {
    name: userName,
    age: 28
  }
  return userInfo
}
