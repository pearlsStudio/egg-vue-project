'use strict'
const path = require('path')

module.exports = appInfo => {
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530782047617_3306'

  // add your config here
  config.middleware = []

  config.logger = { dir: path.resolve(__dirname, '../../log') }

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks'
    }
  }

  config.cluster = {
    listen: {
      port: 3001
    }
  }

  return config
}
