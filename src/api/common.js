import request from '@/utils/ajax'

export const getTopics = (params = {}) => {
  return request({
    url: '/api/v1/topics',
    method: 'get',
    params
  })
}
