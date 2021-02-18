require('babel-register')
require('babel-polyfill')
require('./server.js')

console.log('env: ', process.env.NODE_ENV)
