const path = require("path");
const CopyPlugin = require("copy-webpack-plugin")
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pages: {
    index: {
      entry: './client/src/main.ts',
      template: resolve("./client/public/index.html"),
      title: 'Vue3_Koa2 脚手架'
    }
  },
  outputDir: resolve('client/dist'),
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@components", resolve("./client/src/components"))
      .set("@views", resolve("./client/src/views"))
      .set("@hooks", resolve("./client/src/hooks"))
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin(
        [
          {
            from: resolve("./client/public"),
            to: resolve("./client/dist"),
            toType: 'dir',
            ignore: [
              '.DS_Store',
              {
                glob: 'index.html',
                matchBase: false
              }
            ]
          }
        ]
      )
    ]
  }
}