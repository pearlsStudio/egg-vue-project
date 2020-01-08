'use strict'

/**
 * Docs: https://github.com/my9074/koa2-nginx
 * example: config.xxx.js
 *
 * config.httpProxy = {
    proxies: [
      {
        host: 'http://www.baidu.com',
        context: 'uc',
        event: {
          handleReq: proxyObj => {
            const { proxyReq } = proxyObj
            proxyReq.setHeader('token', 'testtest')
            console.log(proxyReq.getHeader('token'))
          }
        }
        // rewrite: path => path.replace('uc', 'aaa')
      },
      {
        host: 'http://invoice-inner-api.jcloud.com:8023',
        context: 'proxy',
        event: {
          handleReq: proxyObj => {
            const { proxyReq } = proxyObj
            console.log(proxyReq.getHeader('token'))
          }
        }
      }
    ]
  }
 *
 */
const Proxy = require('koa2-nginx')

module.exports = options => {
  const nginx = Proxy.proxy(options)

  return nginx
}
