const env = process.env.NODE_BK_ENV || 'test'
console.log('NODE_BK_ENV:', env)

const config = {
  dev: require('./config.dev'),
  test: require('./config.test'),
  release: require('./config.release')
}

export const getConfig = function(e) {
  return config[e || env]
}

export const getEnv = () => env

export default getConfig(env)
