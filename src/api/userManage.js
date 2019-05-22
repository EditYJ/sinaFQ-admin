import request from '@/utils/request'

// 用户管理-查询用户列表信息
export function getUserList(data) {
  return request({
    url: '/searchUserInfo',
    method: 'post',
    data
  })
}
