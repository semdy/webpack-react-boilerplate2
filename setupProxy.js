const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    '/api',
    proxy({
      target: 'http://47.103.143.86:6001',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    })
  )
}
