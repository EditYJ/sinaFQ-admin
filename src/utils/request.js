import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
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

    // 如果接口返回值报错了
    if (res.code !== 20000) {
      Message({
        message: res.message || 'error',
        type: 'error',
        duration: 5 * 1000
      })

      // 登录信息已过期，清除tooken信息并重新登录
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm('身份验证信息已失效，请重新登录', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(res.message || 'error')
    } else {
      return res
    }
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
