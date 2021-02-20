const env = process.env.NODE_BK_ENV || 'test'
console.log('NODE_BK_ENV:', env)

const config = {
  dev: require('./config.dev'),
  test: require('./config.test'),
  release: require('./config.release')
}

exports.getConfig = function(e) {
  return config[e || env]
}

exports.getEnv = () => env
