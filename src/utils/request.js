import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: '/api', // url = base url + request url  process.env.VUE_APP_BASE_API
  withCredentials: true,
  timeout: 100 * 1000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['Accept'] = 'application/json'
    if (store.getters.token) {
      config.headers['Authentication'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
