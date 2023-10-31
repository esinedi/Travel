const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        additionalData: `@import "@/assets/styles/varibles.less";`,
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
})
