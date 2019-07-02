import axios from 'axios'
import Qs from 'qs'
import { state } from '@/store'

const { API_URL = 'https://cnodejs.org' } = process.env
axios.defaults.timeout = 60000
axios.defaults.baseURL = API_URL // 接口地址

// 设置默认请求头
axios.defaults.headers.common['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

const needTransformMethods = ['post', 'POST', 'put', 'PUT', 'delete', 'DELETE']

// 创建axios实例
const service = axios.create()

// Merge axios to httpInstance,
Object.setPrototypeOf(service, axios)

// request拦截器，设置token、POST传参序列化
service.interceptors.request.use(
  config => {
    const defaultData = {
      accesstoken: state.accessToken
    }
    const { method, useQs } = config
    // const token = ''
    if (!config.data) {
      config.data = {}
    }

    // config.data.token = token || ''
    if (['put', 'post'].includes(method)) {
      config.data = Object.assign({}, defaultData, config.data)
    } else if (['get', 'delete'].includes(method)) {
      config.params = Object.assign({}, defaultData, config.params)
    }

    if (
      !(!useQs && useQs !== undefined) &&
      needTransformMethods.includes(method)
    ) {
      config.data = Qs.stringify(config.data, { allowDots: true })
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '错误请求'
          break
        case 401:
          err.message = '未授权，请重新登录'
          break
        default:
          err.message = `连接错误${err.response.status}`
      }
    } else {
      err.message = '连接到服务器失败'
    }
    return Promise.resolve(err.response)
  }
)

export default service
