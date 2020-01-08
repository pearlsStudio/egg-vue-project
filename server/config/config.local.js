'use strict'

/***
 * thorResolver dev config, accountSecretKey: 'C196FA243B92A634E69E58421D3A69881E0361DE75D6C663'
 *
 * */

module.exports = () => {
  const config = {}

  config.proxy = true

  // doc: http://git.jd.com/FE/skeleton-barracks/tree/master/packages/egg-controller-validate
  config.controllerValidate = {
    // 解析 thor。必须配置，灰度及激活依赖 thorResolver 。默认开启
    thorResolver: {
      // match/ignore 需要自定义 match/ignore 避免静态资源经过校验等业务中间件
      endpoint: 'http://loginstate-inner-stag.jdcloud.com'
    },
    // 校验灰度权限中间件, 默认开启
    greyUser: {
      // enable: false, // 可单独控制具体中间件的使用, 默认为 true
      // match/ignore 需要自定义 match/ignore 避免静态资源经过校验等业务中间件
      customs: [
        {
          context: ['/api*', '/uccenter*'],
          serviceCode: 'tag'
        },
        {
          context: '/u/*',
          serviceCode: 'vm'
        }
      ]
    },
    // 校验激活中间件, 默认开启
    active: {
      // match/ignore 需要自定义 match/ignore 避免静态资源经过校验等业务中间件
    },
    // [可配] 调用激活校验和灰度校验的 openAPI 配置，若没有配置 config.controllerValidate.openAPIConfig 对象，
    // 则会选取 config.openAPIConfig 中的 default 配置
    openAPIConfig: {
      credentials: {
        accessKeyId: '',
        secretAccessKey: ''
      },
      endpoint: {
        // 如果不使用线上api调用地址，可以单独指定endpoint
        host: 'apigw-internal.cn-north-1.jcloudcs.com',
        protocol: 'http'
      }
    }
  }

  return config
}
