import request from '@/utils/request'

// 用户管理-查询用户列表信息
export function getUserList(data) {
  return request({
    url: '/searchUserInfo',
    method: 'post',
    data
  })
}

// 用户管理-修改额度状态
export function updateLimitStatus(data) {
  return request({
    url: '/updateLimitStatus',
    method: 'post',
    data
  })
}

// 用户管理-修改用户状态
export function updateUserStatus(data) {
  return request({
    url: `/updateLimitStatus?userId=${data.userId}&status=${data.status}`,
    method: 'post',
    data
  })
}
