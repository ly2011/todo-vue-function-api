import request from '@/utils/ajax'
import api from '@/api'

export function serviceGetUserCollections (loginname) {
  return request.get(`${api.userCollections}${loginname}`)
}

export function serviceGetTopics (params) {
  return request.get(api.topics, { params })
}

export function serviceLogin (data) {
  return request.post(api.login, data)
}

export function serviceGetMessages () {
  return request.get(api.fetchMessages)
}

export function serviceMessageMarkAll () {
  return request.post(api.messageMarkAll)
}

export function serviceGetTopicDetail (topicId, params) {
  return request.get(`${api.topicDetail}${topicId}`, { params })
}

export function serviceNewTopic (data) {
  return request.post(api.newTopics, data)
}

export function serivceUpdateTopic (data) {
  return request.post(api.updateTopics, data)
}

export function serviceCancelCollection (data) {
  return request.post(api.cancelCollection, data)
}

export function serviceAddCollection (data) {
  return request.post(api.collection, data)
}

export function serviceReplies (topicId, data) {
  return request.post(`${api.replies}${topicId}/replies`, data)
}

export function serviceLike (replyId, data) {
  return request.post(`${api.like}${replyId}/ups`, data)
}

export function serviceGetUser (loginname) {
  return request.get(`${api.user}${loginname}`)
}

export function serviceGetMessageCount () {
  return request.get(api.messageCount)
}
