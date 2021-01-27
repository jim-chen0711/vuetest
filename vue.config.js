// vue.config.js
module.exports = {
  publicPath:'./',
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true, //关键点在这  
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},
  devServer: {
    // port: port,
    open: true,
    https: false,
    overlay: {
      warnings: false,
      errors: true
    },
    /* 跨域代理 */
    proxy: {
      '/herokuapp': {                        // 自訂 local 端的位置
          target: 'https://hw-web-api.herokuapp.com/',  // 遠端 URL Domain
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/herokuapp': ''
          }
      }
    }
  }
}