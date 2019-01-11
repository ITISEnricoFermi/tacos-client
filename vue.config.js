// vue.config.js

module.exports = {
  devServer: {
  // https : true,
    proxy: {
      '/public': {
        target: {
          protocol: 'http:',
          host: 'localhost',
          port: 3000
        },
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/main.scss";`
      }
    }
  }
}
