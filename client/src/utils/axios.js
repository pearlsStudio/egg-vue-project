import axios from 'axios'
import qs from 'qs'

// 创建axios实例
const service = axios.create({
  timeout: 30000, // 请求超时时间
  paramsSerializer: function(params) {
    return qs.stringify(params, { indices: false }) // param=value1&param=value2
  }
})

// request拦截器
service.interceptors.request.use(
  config => config,
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => response.data,
  error => {
    // TODO
    return Promise.reject(error)
  }
)

export default service
